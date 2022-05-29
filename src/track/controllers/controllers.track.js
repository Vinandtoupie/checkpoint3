const trackModel = require('../models/models.track')

class TrackController {
    async getTracks(req, res) {
        try {
            const tracks = await trackModel.getTracks()
            res.status(200).json(tracks)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async getTrack(req, res) {
        try {
            const resultGetTrack = await trackModel.getTrack(req.params.id)
            res.status(200).json(resultGetTrack)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async postTrack(req, res) {
        try {
            const createTrack = await trackModel.postTrack(req.body)
            res.status(201).json(createTrack)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async putTrack(req, res) {
        try {
            const putTrack = await trackModel.putTrack(req.body, req.params.id)
            res.status(201).json(putTrack)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async deleteTrack(req, res) {
        try {
            const resultDelete = await trackModel.deleteTrack(req.params.id)
            res.status(204).json(resultDelete)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new TrackController();