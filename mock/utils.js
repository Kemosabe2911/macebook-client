const jwt = require('jsonwebtoken')

const PRIVATE_KEY = 'abkdhneji452ds8'

exports.getUserData = (user) => {
    return {
        username: user.username,
        name: user.name,
        email: user.email,
        phone: user.phone,
        picture: user.picture,
        location: user.location,
        cover: user.cover,
        connections: user.connections,
        batch: user.batch,
        branch: user.branch,
        position: user.position
    }
}

exports.generateToken = (user) => {
    return jwt.sign({ username: user.username }, PRIVATE_KEY)
}
