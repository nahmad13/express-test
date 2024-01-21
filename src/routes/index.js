
const express = require("express");
const userRoutes = require("../modules/user/user.routes");
const postRoutes = require("../modules/posts/post.routes");

const router = express.Router();


router.use("/auth", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
