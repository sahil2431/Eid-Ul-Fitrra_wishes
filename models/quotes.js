const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    message: String,
});

const quotes = mongoose.model('quotes', quotesSchema);
module.exports = quotes