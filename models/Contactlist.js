const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
  'Last name': String,
  'First name': String,
  Email: String,
  age: Number,
})

const Contactlist = mongoose.model('Contactlist', contactSchema)

module.exports = Contactlist
