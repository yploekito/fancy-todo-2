const mongoose = require('mongoose')

const {Schema} = mongoose

const tagSchema = new Schema({
    name:String,
    TodoIds : [{ type: Schema.Types.ObjectId, ref: 'Todo'}],
    UserId: { type: Schema.Types.ObjectId, ref: 'User'} 
})

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag