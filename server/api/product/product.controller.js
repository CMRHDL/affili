'use strict';

var _ = require('lodash'),
  request = require('request');

exports.get = function(req, res) {
  var logon = {
    url: 'https://product-api.affili.net/V3/WSDLFactory/Product_ProductData.wsdl',
    method: 'GET',
    qs: {
      username: '759303',
      password: '3U733z2enxJxlGkm6sn9',
      ShopIds: 'GetShopList',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }

  var search = {
    url: 'https://product-api.affili.net/V3/productservice.svc/JSON/SearchProducts',
    method: 'GET',
    qs: {
      PublisherId: '759303',
      password: '3U733z2enxJxlGkm6sn9',
      Query: 'ipod',
    },
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }

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
};
