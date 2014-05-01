var app = app || {};

(function( window ) {
    'use strict';

    app.ENTER_KEY = 13;
    app.ESC_KEY = 27;

    m.route(document.getElementById('todoapp'), '/', {
        '/': app,
        '/:filter': app
    });

})(window);
