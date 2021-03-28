import Link from "next/link";
import React from "react";
import { Card, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";

const Post = ({ post }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds();

  return {
    paths,
    fallback: false, // any path not returned by getStaticPaths will go to 404 page
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};

export default Post;
