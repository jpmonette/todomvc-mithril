var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

(function( window ) {
    'use strict';

    m.route(document.getElementById('todoapp'), "/", {
		"/": app,
		"/:filter": app
	});

})(window);
