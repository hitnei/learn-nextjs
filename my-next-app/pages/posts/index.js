import React from "react";
import Layout from "../../components/Layout";
import Cart from "react-bootstrap/Card";
import { getPosts } from "../../lib/post";

const Posts = (props) => {
  return (
    <div>
      <Layout>
        <h1>My Posts</h1>
        {props.posts.map((post) => {
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

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
