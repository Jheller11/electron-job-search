//  app.js handles creation of new jobs, finding and
//  listing current jobs, and deleting jobs.
const Job = require('./Job')

const { shell } = require('electron')

const form = document.querySelector('form')
const fields = document.querySelectorAll('input')
const list = document.getElementById('list')
const clear = document.getElementById('clear')

// create a new job on form submission
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
// find and list each job in db
// called after new job to refresh page
const listJobs = () => {
  Job.find({})
    .then(jobs => {
      jobs.forEach(job => {
        appendDiv(job.title, job.url, job.notes, job.date, job.id)
      })
    })
    .then(() => {
      deleteButtons()
    })
}
// create html for each job
const appendDiv = (title, url, notes, date, id) => {
  let div = document.createElement('div')
  div.innerHTML = `<h5>${title}</h5><button>View in Browser</button><p>Notes: ${notes}</p><p>${date}</p><button class='delete' id=${id}>Delete</button>`
  div.className = 'job'
  div.childNodes[1].addEventListener('click', () => {
    shell.openExternal(url)
  })
  list.appendChild(div)
}
// add a functional delete button for each item
const deleteButtons = () => {
  let buttons = document.querySelectorAll('.delete')
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      let id = e.target.id
      console.log(id)
      Job.findOneAndRemove({ _id: id })
    })
  })
}

form.addEventListener('submit', handleSubmit)
clear.addEventListener('click', () => {
  Job.remove({}).then(() => {
    listJobs()
  })
})

listJobs()
