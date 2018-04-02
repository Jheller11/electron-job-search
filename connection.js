const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jobs')

mongoose.Promise = Promise

module.exports = mongoose
