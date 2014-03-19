var app = app || {};

(function () {
    'use strict';

    app.controller = function() {

        this.list = new app.TodoList(); // Todo collection
        this.title = m.prop('');        // Temp title placeholder
        this.filter = m.prop('');       // TodoList filter

        // Add a Todo 
        this.add = function(title, e) {
            if(e.keyCode == ENTER_KEY && title()) {
                this.list.push(new app.Todo({title:title()}));
                this.title('');
            }
        };

        // Show/Hide Todo
        this.show = function(key) {
            if(this.filter() == 'active')
                return this.list[key].completed() ? false : true;
            else if(this.filter() == 'completed')
                return this.list[key].completed() ? true : false;
            else
                return true;
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

        // Applying a filter
        this.applyFilter = function(value) { this.filter(value); };
    };
    
})();
