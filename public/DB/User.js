const mongoose = require('mongoose')

const User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    room: {
        type: Number,
    }
})

module.exports = User