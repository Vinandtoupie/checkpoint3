const express = require('express')
const trackController = require('./controllers/controllers.track')
const router = express.Router()

router.get('/', trackController.getTracks)
router.get("/:id", trackController.getTracks)
router.post('/', trackController.postTrack)
router.put('/:id', trackController.putTrack)
router.delete('/:id', trackController.deleteTrack)
module.exports = router