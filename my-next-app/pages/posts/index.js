import React from "react";
import Layout from "../../components/Layout";
import Cart from "react-bootstrap/Card";
import { getPosts } from "../../lib/post";
import Link from "next/link";

const Posts = (props) => {
  return (
    <div>
      <Layout>
        <h1>My Posts</h1>
        {props.posts.map((post) => {
          return (
            <Cart key={post.id} className="my-3 shadow">
              <Cart.Body>
                <Cart.Title>{post.id} -- {post.title}</Cart.Title>
                <Cart.Text>{post.body}</Cart.Text>
                <Link href={`/posts/${post.id}`} passHref>
                  <Cart.Link>See more</Cart.Link>
                </Link>
              </Cart.Body>
            </Cart>
          );
        })}
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
