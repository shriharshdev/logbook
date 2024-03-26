const express = require("express")
const router = express.Router();

const postcontroller = require("../Controllers/postController")
const usercontroller = require("../Controllers/userController")

router.get("/posts", postcontroller.post_list);

router.get("/create", postcontroller.post_create_get);
router.post("/create", postcontroller.post_create_post);

router.delete("/delete/:id", postcontroller.post_delete_post);

router.get("/user", usercontroller.user_create_get);
router.post("/user", usercontroller.user_create_post)

module.exports = router;