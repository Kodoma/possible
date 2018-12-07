'use strict'
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.connect('mongodb://localhost:27017/');

module.exports = {
    // Search service

    getSearchItemsByQuery: query => {
        const books = mongoose.model('books', { name: String })
    
        books.find({ title: query }, function(err, docs) {
            if (err || !docs) {
                return err;
            }
            else {
                return docs;
            }
        });
    
    }
}        