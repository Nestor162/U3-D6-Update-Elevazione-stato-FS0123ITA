import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComments extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "",
      elementId: ""
    }
  };

  fetchAddComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhY2FjYTY4MzQzMTAwMTRkZWE3ODQiLCJpYXQiOjE2ODA1MjYwMjYsImV4cCI6MTY4MTczNTYyNn0.H6aMwONZorv1fbVOE8mvdqGVlbgxLn43VnSA5ikq3uA",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.newComment)
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
        console.log("tutto ok");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        elementId: this.props.asin,
        [propertyName]: propertyValue
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.fetchAddComments();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="recensione">
          <Form.Label>Recensione:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qui il tuo commento"
            onChange={e => {
              this.handleChange("comment", e.target.value);
            }}
          />

          <Form.Label>Valutazione:</Form.Label>
          <Form.Control
            type="number"
            min={1}
            max={5}
            placeholder="Valuta (da 1 a 5)"
            onChange={e => {
              this.handleChange("rate", e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComments;
