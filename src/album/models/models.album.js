const mysql = require('mysql2')


// CONNEXION BDD //
class AlbumModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })


    async getAlbums() {
        try {
            const resultAlbums = await this.connection.promise().query('SELECT * FROM album')
            return resultAlbums[0]
        }
        catch (error) {
            throw error
        }
    }


    async getAlbum(resultAlbum) {
        try {
            const resultAlbumId = await this.connection.promise().query('SELECT * FROM album where id=?', [resultAlbum])
            return resultAlbumId[0][0]
        }
        catch (error) {
            throw error
        }
    }

    async getAlbumTrack(id) {
        try {
            const result = await this.connection.promise().query('SELECT * FROM album INNER JOIN track ON track.id_album = album.id WHERE album.id = ?', [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async postAlbum(createAlbum) {
        try {
            const resultCreateAlbum = await this.connection.promise().query('INSERT INTO  album set ?', [createAlbum])
            return resultCreateAlbum[0][0]
        }
        catch (error) {
            throw error
        }
    }


    async updateAlbum(body, resultUpdate) {
        try {
            const resultUpdateAlbum = await this.connection.promise().query('UPDATE album SET ? WHERE id = ?', [body, resultUpdate])
            return resultUpdateAlbum[0]
        }
        catch (error) {
            throw error
        }
    }


    async deleteAlbum(resultDelete) {
        try {
            const resultDeleteAlbum = await this.connection.promise().query('DELETE FROM album WHERE id = ?', [resultDelete])
            return resultDeleteAlbum[0]
        }
        catch (error) {
            throw error
        }
    }

}


module.exports = new AlbumModel()