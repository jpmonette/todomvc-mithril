var app = app || {};

(function () {
    'use strict';

    //view utility
    app.watchInput = function(ontype, onenter, onescape) {
        return function(e) {
            ontype(e)
            if (e.keyCode == app.ENTER_KEY) onenter()
            if (e.keyCode == app.ESC_KEY) onescape()
        }
    };
    
    
    
    app.view = function(ctrl) {
        return [
            m('header#header', [
                m('h1', 'todos'),
                m('input#new-todo[placeholder="What needs to be done?"]', { 
                    onkeypress: app.watchInput(
                        m.withAttr('value', ctrl.title),
                        ctrl.add.bind(ctrl, ctrl.title),
                        ctrl.clearTitle.bind(ctrl)
                    ),
                    value: ctrl.title()
                })
            ]),
            m('section#main', [
                m('input#toggle-all[type=checkbox]'),
                m('ul#todo-list', [
                    ctrl.list.filter(ctrl.isVisible.bind(ctrl)).map(function(task, index) {
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
            ctrl.list.length == 0 ? '' : app.footer(ctrl)
        ];
    };

})();
