const albumModel = require('../models/models.album')

class AlbumController {

    async getAlbums(req, res) {
        try {
            const resultAlbums = await albumModel.getAlbums()
            res.status(200).json(resultAlbums)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async getAlbum(req, res) {
        try {
            const resultAlbum = await albumModel.getAlbum(req.params.id)
            res.status(200).json(resultAlbum) //Valide la demande
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async getAlbumTrack(req, res) {
        try {
            const result = await albumModel.getAlbumTrack(req.params.id)
            res.status(200).json(result)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async postAlbum(req, res) {
        try {
            const createAlbum = await albumModel.postAlbum(req.body)
            res.status(201).json(createAlbum)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async updateAlbum(req, res) {
        try {
            const body = req.body
            const resultUpdate = await albumModel.updateAlbum(body, req.params.id)
            res.status(204).json(resultUpdate)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    async deleteAlbum(req, res) {
        try {
            const resultDelete = await albumModel.deleteAlbum(req.params.id)
            res.status(204).send("Votre album a été supprimée")
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}
module.exports = new AlbumController();