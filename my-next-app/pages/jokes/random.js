import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/joke";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here's your random joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  let joke = await getRandomJoke();
  // joke = false;

  if (!joke) {
    return {
      notFound: true, // 404
    };
    // return {
    //   redirect: {
    //     destination: "/posts",
    //     permanent: false,
    //   },
    // };
  }

  return {
    props: {
      joke,
    },
  };
};

export default Random;
