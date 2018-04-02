// this file establishes a connection to the local mongodb database

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jobs')

mongoose.Promise = Promise

module.exports = mongoose
