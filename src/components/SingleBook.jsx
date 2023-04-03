import { Component } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import CommentArea from "./CommentArea ";
import AddComments from "./AddComment";

class SingleBook extends Component {
  state = {
    selected: false,
    viewComments: false,
    addComment: false
  };

  handleOnClick = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    return (
      <Card
        className={`h-100 ${this.state.selected ? "selected" : ""}`}
        onClick={() => {
          this.setState(this.handleOnClick);
        }}
      >
        <Card.Img className="img-fluid" variant="top" src={this.props.book.img} />
        <Card.Body className="d-flex flex-column justify-content-around">
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <h5>
            Prezzo:
            <Badge bg="success" className="ms-2">
              {this.props.book.price}€
            </Badge>
          </h5>
          <h5>
            Categoria:
            <Badge bg="secondary" className="ms-2">
              {this.props.book.category}
            </Badge>
          </h5>

          {this.state.viewComments && <CommentArea asin={this.props.book.asin} />}

          <Button
            variant="primary"
            className="w-100"
            onClick={() => {
              this.setState({ selected: true, viewComments: !this.state.viewComments });
            }}
          >
            {this.state.viewComments ? "Nascondi Commenti" : "Mostra Commenti"}
          </Button>

          <Button
            variant="info"
            className="w-100"
            onClick={() => {
              this.setState({ selected: true, addComment: !this.state.addComment });
            }}
          >
            Scrivi commento
          </Button>

          {this.state.addComment && <AddComments asin={this.props.book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
