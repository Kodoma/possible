'use strict'

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/possibleDb";

module.exports = {
    getSearchItemsByQuery: q => {
        return new Promise(function(resolve, reject) {
            MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              var dbo = db.db("possibleDb");
              var query = {"title" : {$regex : ".*"+ q +"*"} }
              return dbo.collection("books").find(query)
                .toArray(function(err, result) {
                  if (err) throw reject(err);
                  return resolve(result);
              });
              db.close();
            });
        })
    }
}