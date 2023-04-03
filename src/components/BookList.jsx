import SingleBook from "./SingleBook";
import { Col } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <>
        {this.props.books.map((book, i) => {
          return (
            <Col md={4} lg={3} className="mt-5">
              <SingleBook key={`book-${i}`} book={book} />
            </Col>
          );
        })}
      </>
    );
  }
}

export default BookList;
