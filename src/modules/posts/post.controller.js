const postService = require("./post.service");

async function createPost(req, res, next) {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;
    const newPost = await postService.createPost(title, content, userId);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
}

async function getPostsByUserId(req, res, next) {
  try {
    const userId = req.params.id;
    const posts = await postService.getPostsByUserId(userId);
    res.json(posts);
  } catch (error) {
    next(error);
  }
}

async function getPostById(req, res, next) {
  try {
    const postId = req.params.id;
    const post = await postService.getPostById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const postId = req.params.id;
    const userId = req.user.id;
    const updatedPost = await postService.updatePost(postId, userId, req.body);
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    const postId = req.params.id;
    const deletedPost = await postService.deletePost(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(deletedPost);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createPost,
  getPostsByUserId,
  getPostById,
  updatePost,
  deletePost,
};
