import React from "react";
import Layout from "../../components/Layout";
import Cart from "react-bootstrap/Card";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      body: "My post 1 body",
    },
    {
      id: 2,
      title: "Post 2",
      body: "My post 2 body",
    },
  ];

  return (
    <div>
      <Layout>
        <h1>My Posts</h1>
        {posts.map((post) => {
          return (
            <Cart key={post.id}>
              <Cart.Body>
                <Cart.Title>{post.title}</Cart.Title>
                <Cart.Text>{post.body}</Cart.Text>
              </Cart.Body>
            </Cart>
          );
        })}
      </Layout>
    </div>
  );
};

export default Posts;
