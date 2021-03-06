const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String
        }
    },
    { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User