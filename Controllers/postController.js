const Post = require("../models/posts")
const asyncHandler = require("express-async-handler")

exports.post_list = asyncHandler(async(req,res,next) => {
    res.send("POST LISTS")
})
exports.post_create_get = asyncHandler(async(req,res,next) => {
    res.send("CREATE A POST")
})
exports.post_create_post = asyncHandler(async(req,res,next) => {
    res.send("CREATE A POST")
})
exports.post_delete_post = asyncHandler(async(req,res,next) => {
    res.send("DELETE A POST")
})