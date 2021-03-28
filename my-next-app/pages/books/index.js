import Layout from "../../components/Layout";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { getBooks } from "../../lib/book";

const Books = ({ books }) => {
  console.log("🚀 ~ file: index.js ~ line 8 ~ Books ~ books", books);
  return (
    <Layout>
      {books.map((book) => {
        return (
          <Card key={book.bookName} className="my-3 shadow">
            <Card.Body>
              <Card.Title>{book.bookName}</Card.Title>
              <Card.Text>{book.bookContent}</Card.Text>
              <Link href="/">
                <Button variant="dark">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const books = await getBooks();

  return {
    props: {
      books,
    },
  };
};

export default Books;
