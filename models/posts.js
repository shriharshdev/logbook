const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {type: String, required: true, maxLength: 100},
    content: {type: String, required: true, maxLength: 300},
    user: {type: Schema.Types.ObjectId, required: true, ref:"User"},
},{timestamps: true})

module.exports = mongoose.model("Post", PostSchema)