import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

class InputSearch extends Component {
  state = {
    searchQuery: ""
  };

  handleChange = searchQuery => {
    this.setState({ searchQuery });
  };

  handleSearch = () => {};
  render() {
    return (
      <>
        <InputGroup className="mb-3 px-5">
          <Form.Control
            placeholder="Cerca un libro..."
            aria-label="Books's name"
            value={this.state.searchQuery}
            onChange={e => this.handleChange(e.target.value)}
          />
          <Button
            onClick={() => this.props.onSearch(this.state.searchQuery)}
            variant="outline-secondary"
            id="button-search"
            className="d-flex justify-content-center align-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <span className="ms-2">Cerca</span>
          </Button>
        </InputGroup>
      </>
    );
  }
}

export default InputSearch;
