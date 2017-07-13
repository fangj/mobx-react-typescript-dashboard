'use strict';

module.exports = app => {
  // app.get('/', 'home.index');
    app.redirect('/', '/index.html');
};
