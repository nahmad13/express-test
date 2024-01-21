const Post = require("./post.schema");

async function createPost(title, content, userId) {
  const newPost = new Post({ title, content, userId });
  return newPost.save();
}

async function getPostsByUserId(userId) {
  return Post.find({ userId });
}

async function getPostById(postId) {
  return Post.findById(postId);
}

async function updatePost(postId, userId, body) {
  console.log({ postId, userId, body });
  const post = await this.getPostById(postId);
  if (post && post.userId == userId) {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { ...body },
      {
        new: true,
      }
    );
    return updatedPost;
  } else {
    throw new Error("Cannot update post");
  }
}

async function deletePost(postId) {
  const deletedPost = await Post.findByIdAndDelete(postId);
  return deletedPost;
}

module.exports = {
  createPost,
  getPostsByUserId,
  getPostById,
  updatePost,
  deletePost,
};
