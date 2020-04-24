import mongoose from 'mongoose'

const friendSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    language: String,
    email: String,
    age: Number,
    contact: {
        type: Array
    }
})

export const Friends = mongoose.model('friends', friendSchema)