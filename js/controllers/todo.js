var app = app || {};

(function () {
	'use strict';

	app.controller = function() {
		this.list = new app.TodoList();
		this.title = m.prop('');

		// Add a Todo 
		this.add = function(title, e) {
			if(e.keyCode == ENTER_KEY && title()) {
				this.list.push(new app.Todo({title:title()}));
				this.title('');
			}
		};

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

		this.amountCompleted = function() {
			var amount = 0;
			
			for(var i = 0; i < this.list.length; i++)
				if(this.list[i].completed())
					amount++;

			return amount;
		}
	};
	
})();
