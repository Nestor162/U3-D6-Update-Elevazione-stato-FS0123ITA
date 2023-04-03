import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import { Component } from "react";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import InputSearch from "./components/InputSearch";

class App extends Component {
  state = {
    filteredBooks: fantasy
  };

  handleSearch = searchQuery => {
    const filteredBooks = fantasy.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
    this.setState({ filteredBooks });
  };

  render() {
    return (
      <div className="App position-relative bg-light">
        <MyNav />
        <Welcome />

        <Container>
          <InputSearch onSearch={this.handleSearch} />
          <Row>
            <BookList books={this.state.filteredBooks} />
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}

export default App;
