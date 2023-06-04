const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);