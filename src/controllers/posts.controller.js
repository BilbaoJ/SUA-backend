const BASE_URL = process.env.BASE_URL;

const readPosts = async (req, res) => {
    let response = {};
    try {
      const { id } = req.params;
      const result = await fetch(`${BASE_URL}/users/${id}/posts`);
      const data = await result.json();
      response.ok = true;
      response.message = "Posts read successfully";
      response.info = data;
      res.send(response);
    } catch (error) {
      response.ok = false;
      response.message = "An error occurred reading the posts";
      response.info = error.message;
      res.status(500).send(response);
    }
};

const readOnePost = async (req, res) => {
  let response = {};
  try {
    const { id } = req.params;
    const result = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await result.json();
    response.ok = true;
    response.message = "Post read successfully";
    response.info = data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred reading the post";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const createPost = async (req, res) => {
  let response = {};
  try {
    const info = req.body;
    const result = await fetch(`${BASE_URL}/posts/`, {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await result.json();
    response.ok = true;
    response.message = "Post created successfully";
    response.info = data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred creating the post";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const updatePost = async (req, res) => {
  let response = {};
  try {
    const info = req.body;
    const { id } = req.params;
    const result = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(info),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await result.json();
    response.ok = true;
    response.message = "Post updated successfully";
    response.info = data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred updating the post";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const deletePost = async (req, res) => {
  let response = {};
  try {
    const { id } = req.params;
    const result = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    const data = await result.json();
    response.ok = true;
    response.message = "Post deleted successfully";
    response.info = data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred deleting the post";
    response.info = error.message;
    res.status(500).send(response);
  }
};

module.exports = {
  readPosts,
  readOnePost,
  createPost,
  updatePost,
  deletePost
};
