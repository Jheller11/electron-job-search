console.log('hello')
const Job = require('./Job')

const form = document.querySelector('form')
const fields = document.querySelectorAll('input')
const list = document.getElementById('list')

const handleSubmit = e => {
  let title = fields[0].value
  let url = fields[1].value
  let notes = fields[2].value
  Job.create({
    title: title,
    url: url,
    notes: notes
  })
  fields.forEach(field => {
    return (field.value = '')
  })
  fields[3].value = 'Create a Job'
  listJobs()
}

const listJobs = () => {
  Job.find({}).then(jobs => {
    jobs.forEach(job => {
      appendDiv(job.title, job.url, job.notes)
    })
  })
}

const appendDiv = (title, url, notes) => {
  let div = document.createElement('div')
  div.innerHTML = `<h5>${title}</h5><p><a href=${url}>View Job</a></p><p>Notes: ${notes}</p>`
  div.className = 'job'
  list.appendChild(div)
}

listJobs()
form.addEventListener('submit', handleSubmit)
