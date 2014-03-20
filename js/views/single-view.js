var app = app || {};

(function () {
    'use strict';

    // Single todo view
    app.single = function(ctrl, task, index) {
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
        ]);
    };

})();
