var app = app || {};

(function () {
    'use strict';

    // Todo Model
    app.Todo = function(data) {
        this.title = m.prop(data.title);
        this.completed = m.prop(false);
    };
    
    // List of Todos
    var list = [];
    app.TodoList = function() {
        return list;
    };

})();
