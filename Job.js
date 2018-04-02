const mongoose = require('./connection')

const JobSchema = new mongoose.Schema({
  title: String,
  url: String,
  notes: String,
  date: {
    type: Date,
    default: Date.now()
  }
})

const Job = mongoose.model('Job', JobSchema)

module.exports = Job
