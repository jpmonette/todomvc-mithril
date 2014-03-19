var app = app || {};

(function () {
	'use strict';

	app.view = function(ctrl) {

		var clearCompleted = m()

		if(ctrl.amountCompleted() != 0)
			clearCompleted = m('button#clear-completed', {
				onclick: ctrl.clearCompleted.bind(ctrl)
			}, 'Clear completed (' + ctrl.amountCompleted() + ')')

		return m('#todoapp'), [
			m('header#header', [
				m('h1', 'todos'),
				m('input#new-todo', { 
					placeholder: 'What needs to be done?',
					onkeydown: function(e) { m.withAttr('value', ctrl.title)(e); ctrl.add(ctrl.title, e) },
					value: ctrl.title()
				})
			]),
			m('section#main', [
				m('input#toggle-all[type=checkbox]'),
				m('ul#todo-list', [
					ctrl.list.map(function(task, index) {
						return m('li', { class: task.completed() ? 'completed' : ''}, [
							m('.view', [
								m('input.toggle[type=checkbox]', {
									onclick: m.withAttr('checked', task.completed),
									checked: task.completed()
								}),
								m('label', task.title()),
								m('button.destroy', { onclick: ctrl.remove.bind(ctrl, index)})
							]),
							m('input.edit')
						])
					})
				])
			]),
			m('footer#footer', [
				m('span#todo-count', m.trust('<strong>' + ctrl.list.length + '</strong> item left')),
				m('ul#filters', [
					m('li.selected', [
						m('a[href=#/]', 'All')
					]),
					m('li', [
						m('a[href=#/active]', 'Active')
					]),
					m('li', [
						m('a[href=#/completed]', 'Completed')
					])
				]),
				clearCompleted
			])
		];
	};

})();
