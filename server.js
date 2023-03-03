const express = require('express')
const mongoose = require('mongoose')
const Contactlist = require('./models/Contactlist')
const contactRoutes = require('./routes/contact-routes')

const PORT = 3000
const URL =
  'mongodb+srv://adamxk90:Pass321@cluster0.suqttdx.mongodb.net/contact?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use(contactRoutes)

mongoose
  .connect(URL, { usenewurlparser: true, useunifiedtopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`)
})
