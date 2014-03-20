var app = app || {};

(function () {
    'use strict';

    app.controller = function() {

        this.list = new app.TodoList(); // Todo collection
        this.title = m.prop('');        // Temp title placeholder
        this.filter = m.prop(m.route.param('filter') || '');       // TodoList filter

        // Add a Todo 
        this.add = function(title) {
            if(this.title()) {
                this.list.push(new app.Todo({title: title()}));
                this.title('');
            }
        };

        //check whether a todo is visible
        this.isVisible = function(todo) {
            if(this.filter() == '')
                return true;
            if (this.filter() == 'active')
                return !todo.completed();
            if (this.filter() == 'completed')
                return todo.completed();
        }
        
        this.clearTitle = function() {
            this.title('')
        }

        // Removing a Todo from the list
        this.remove = function(key) {
            this.list.splice(key, 1)
        }

        // Remove all Todos where Completed == true
        this.clearCompleted = function() {
            for(var i = 0; i < this.list.length; i++) {
                if(this.list[i].completed())
                    this.list.splice(i, 1)
            }
        }

        // Total amount of Todos completed
        this.amountCompleted = function() {
            var amount = 0;
            
            for(var i = 0; i < this.list.length; i++)
                if(this.list[i].completed())
                    amount++;

            return amount;
        }
    };
    
})();
