var app = app || {};

(function () {
    'use strict';

    app.footer = function(ctrl) {
        return m('footer#footer', [
            m('span#todo-count', [
                m('strong', ctrl.list.length), ' item' + (ctrl.list.length > 1 ? 's' : '') + ' left'
            ]),
            m('ul#filters', [
                m('li', [
                    m('a[href=/]', {
                        config: m.route,
                        class: ctrl.filter() == '' ? 'selected' : ''
                    }, 'All')
                ]),
                m('li', [
                    m('a[href=/active]', {
                        config: m.route,
                        class: ctrl.filter() == 'active' ? 'selected' : ''
                    }, 'Active')
                ]),
                m('li', [
                    m('a[href=/completed]', {
                        config: m.route,
                        class: ctrl.filter() == 'completed' ? 'selected' : ''
                    }, 'Completed')
                ])
            ]),
            ctrl.amountCompleted() == 0 ? '' : m('button#clear-completed', {
                onclick: ctrl.clearCompleted.bind(ctrl)
            }, 'Clear completed (' + ctrl.amountCompleted() + ')')
        ]);
    }

})();
