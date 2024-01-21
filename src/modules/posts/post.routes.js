// routes/postRoutes.js
const express = require("express");
const postController = require("./post.controller");
const postValidator = require("./post.validator");
const authMiddleware = require("../../middlewares/auth.middleware");
const router = express.Router();
const validateRequest = require("../../middlewares/validation.middleware");

router.post(
  "/create",
  validateRequest.request,
  authMiddleware.authenticateToken,
  postValidator.createPostValidation,
  postController.createPost
);
router.get("/user/:id", postController.getPostsByUserId);
router.get("/:id", postController.getPostById);
router.patch(
  "/:id",
  authMiddleware.authenticateToken,
  postValidator.updatePostValidation,
  postController.updatePost
);
router.delete(
  "/:id",
  authMiddleware.authenticateToken,
  postController.deletePost
);

module.exports = router;
