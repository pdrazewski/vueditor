namespace('enp.editor.scene');

enp.editor.scene = (function($, window, undefined) {

	var settings;
	var domData;
	var resize;
	var aceInit;
	var init;
	var getAceContent;
	var getSceneContent;
	var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
 	};
 	var escapeHtml;

  	escapeHtml = function(string) {
    	return String(string).replace(/[&<>"'\/]/g, function (s) {
      	return entityMap[s];
    	});
  	}

	settings = {
		steps: 3,
		data: 'historia 3 stanów wstecz'
	}

	/* 
	*	domJSON implementation
	*/
	domData = function() {
		var myDiv = document.getElementById('scene');
		var jsonOutput = domJSON.toJSON(myDiv, {
			attributes: ['id', 'class', 'style'], 
			domProperties: { 
				exclude: true, 
				values: [
				'text-decoration',
				'clientHeight', 
				'clientLeft', 
				'clientTop', 
				'offsetWidth', 
				'offsetHeight', 
				'offsetLeft', 
				'offsetTop', 
				'offsetWidth', 
				'scrollHeight', 
				'scrollLeft', 
				'scrollTop', 
				'scrollWidth'
			] 
			},
			computedStyle: false
		});
		return jsonOutput;
	}

	/* 
	*	resize implementation
	*/
	resize = function() {
		interact('#js-scene').resizable({
        edges: { 
            right: '#js-handlerHorizontal',
            bottom: "#js-handlerVerical"
        }
      }).on('resizemove', function (event) {
        var ruler = document.getElementById('js-size');
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style 
        target.style.width  = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';
        ruler.textContent = event.rect.width + '×' + event.rect.height;
      });
	}
	
	/*
	*	Return Scene Content HTML
	*/
	getSceneContent = function() {
		return document.getElementById("js-sceneContent").innerHTML;
	}

	/*
	*	Implement ace editor
	*/
	aceInit = function() {
		var escaped = escapeHtml($('#js-sceneContent').html());
		var escapeContent = $('#js-sceneContent').html(escaped);
		var editor = ace.edit("js-sceneContent");
	    editor.setTheme("ace/theme/monokai");
	    editor.getSession().setMode("ace/mode/html");
	    editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true
     	});
	    editor.getSession().setTabSize(4);
	    document.getElementById('js-sceneContent').style.fontSize='16px';
	}

	getAceContent = function() {
		var editor = ace.edit("js-sceneContent");
		$('#js-sceneContent').html(editor.getSession().getValue()).removeClass().addClass('enp-editor_aceHolder').removeAttr('style');
		editor.destroy()
	}

	init = function() {
		$('#js-toggleHtmlView').on('click', function(e) { 
			e.preventDefault();
			aceInit()
		})
		$('#js-togglePreview').on('click', function(e) { 
			e.preventDefault();
			getAceContent()
		})
	}

	
	return {
		settings: settings,
		domData: domData,
		resize: resize,
		aceInit: aceInit,
		getAceContent: getAceContent,
		init: init
	};

}($, window, undefined));


enp.editor.scene.init();
enp.editor.scene.resize();