// index.js
const express = require("express");
const userRoutes = require("../modules/user/user.routes");
const postRoutes = require("../modules/posts/post.routes");

const router = express.Router();

// Use prefixes for user routes
router.use("/auth", userRoutes);

// Use prefixes for post routes
router.use("/post", postRoutes);

module.exports = router;
