'use strict';

var _ = require('lodash'),
  request = require('request');

exports.search = function(req, res) {
  var logonReq = {
    url: 'https://product-api.affili.net/V3/WSDLFactory/Product_ProductData.wsdl',
    method: 'GET',
    qs: {
      username: req.body.username,
      password: req.body.password,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }

  var searchReq = {
    url: 'https://product-api.affili.net/V3/productservice.svc/JSON/SearchProducts',
    method: 'GET',
    qs: {
      PublisherId: req.body.username,
      password: req.body.password,
      Query: req.body.search,
      PageSize: req.body.PageSize,
      SortBy: 'Score',
      SortOrder: req.body.SortOrder,
    },
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }

  startSearch(logonReq, searchReq);

  function startSearch(logon, search) {
    request(logon, function(logonErr, logonResponse, logonBody) {
      if (!logonErr) {
        request(search, function(searchErr, searchResponse, searchBody) {
            if (!searchErr) {
              res.json(searchBody)
            } else {
              console.log('err search');
            }
        });
      } else {
        console.log('err logon');
      }
    });
  }
};
