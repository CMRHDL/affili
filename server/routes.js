'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/product', require('./api/product'));

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve('client/index.html'));
    });
};
