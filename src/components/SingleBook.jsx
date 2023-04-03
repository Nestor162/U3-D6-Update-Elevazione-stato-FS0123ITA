import { Component } from "react";
import { Card, Badge, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };

  handleOnClick = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    return (
      <Card className={`h-100 ${this.state.selected ? "selected" : ""}`}>
        <Card.Img
          className="img-fluid"
          variant="top"
          src={this.props.book.img}
          onClick={() => {
            this.setState(this.handleOnClick);
          }}
        />
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

          <Button variant="primary" className="w-100">
            Scopri di più...
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
