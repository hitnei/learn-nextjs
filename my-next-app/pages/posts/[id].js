import Link from "next/link";
import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";
import { useRouter } from "next/router";
import spinnerStyles from "../../styles/Spinner.module.css";

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Layout>
        <Spinner
          className={spinnerStyles.spinnerLg}
          animation="border"
          role="status"
          variant="dark"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Layout>
    );
  }

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
  const paths = await getPostIds(5);

  return {
    paths,
    // fallback: false, // any path not returned by getStaticPaths will go to 404 page
    fallback: true, // any path not returned right away by getStaticPaths will go to "template page" and wait for getStaticProps
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
      revalidate: 1, // An optional amount in seconds after which a page re-generation can occur (x times per second)
    },
  };
};

export default Post;
