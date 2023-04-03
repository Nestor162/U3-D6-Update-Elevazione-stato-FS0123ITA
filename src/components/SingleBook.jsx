import { Component } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import CommentArea from "./CommentArea ";

class SingleBook extends Component {
  state = {
    selected: false,
    viewComments: false
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

          {this.state.viewComments && <CommentArea />}

          <Button
            variant="primary"
            className="w-100"
            onClick={() => {
              this.setState({ selected: true, viewComments: !this.state.viewComments });
            }}
          >
            Mostra Commenti
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
