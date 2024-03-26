const User = require("../models/users");
const asyncHandler = require("express-async-handler");

exports.user_create_get = asyncHandler(async(req,res,next) => {
    res.send("Create a user")
})

exports.user_create_post = asyncHandler(async(req,res,next) => {
    res.send("Post a user")
})