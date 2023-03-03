const express = require('express')
const {
  getContacts,
  getContact,
  deleteContacts,
  postContacts,
  patchContacts,
} = require('../controllers/contact-controllers')

const router = express.Router()

router.get('/contactlists', getContacts)
router.get('/contactlists/:id', getContact)
router.delete('/contactlists/:id', deleteContacts)
router.post('/contactlists', postContacts)
router.patch('/contactlists/:id', patchContacts)

module.exports = router
