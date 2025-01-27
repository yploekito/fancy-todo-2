const mongoose = require('mongoose')

const {Schema} = mongoose

const groupingSchema = new Schema({
    title: String,
    description: String,
    creator: { type: Schema.Types.ObjectId, ref: 'User'}, //As an array?
    UserIds: [{type: Schema.Types.ObjectId, ref: 'User'}]
    // TodoIds: [{ type: Schema.Types.ObjectId, ref: 'Todo'}]
})

const grouping = mongoose.model('Grouping', groupingSchema)
module.exports = grouping