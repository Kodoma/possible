'use strict'

var MongoClient = require('mongodb').MongoClient;
const Config = require('../config');

module.exports = {
    getSearchItemsByQuery: q => {
        return new Promise(function(resolve, reject) {
            MongoClient.connect(Config.db.url, function(err, db) {
              if (err) throw err;
              var dbo = db.db(Config.db.dbName);
              var query = {"title" : {$regex : ".*"+ q +"*"} }
              return dbo.collection(Config.db.dbCollection).find(query)
                .toArray(function(err, result) {
                  if (err) throw reject(err);
                  return resolve(result);
              });
            });
        })
    }
}