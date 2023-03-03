const Contactlist = require('../models/Contactlist')

const handleError = (res, error) => {
  res.status(500).json({ error })
}

const getContacts = (req, res) => {
  Contactlist.find() // cursor
    .sort({ age: 1 }) // sort by age
    .then((contactlists) => {
      res.status(200).json(contactlists)
    })
    .catch((err) => handleError(res, err))
}

const getContact = (req, res) => {
  Contactlist.findById(req.params.id)
    .then((contactlist) => {
      res.status(200).json(contactlist)
    })
    .catch((err) => handleError(res, err))
}

const deleteContacts = (req, res) => {
  Contactlist.findByIdAndDelete(req.params.id) // cursor
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => handleError(res, err))
}
const postContacts = (req, res) => {
  const contactlist = new Contactlist(req.body)

  contactlist
    .save() // cursor
    .then((result) => {
      res.status(201).json(result)
    })
    .catch((err) => handleError(res, err))
}
const patchContacts = (req, res) => {
  Contactlist.findByIdAndUpdate(req.params.id, req.body) // cursor
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => handleError(res, err))
}

module.exports = {
  getContacts,
  getContact,
  deleteContacts,
  postContacts,
  patchContacts,
}
