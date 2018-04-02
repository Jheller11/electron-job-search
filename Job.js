const mongoose = require('./connection')

const JobSchema = new mongoose.Schema({
  title: String,
  url: String,
  notes: String
})

const Job = mongoose.model('Job', JobSchema)

module.exports = Job
