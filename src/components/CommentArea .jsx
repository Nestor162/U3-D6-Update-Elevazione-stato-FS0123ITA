import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: " "
  };

  componentDidMount = () => {
    this.fetchCommenti();
  };

  fetchCommenti = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhY2FjYTY4MzQzMTAwMTRkZWE3ODQiLCJpYXQiOjE2ODA1MjYwMjYsImV4cCI6MTY4MTczNTYyNn0.H6aMwONZorv1fbVOE8mvdqGVlbgxLn43VnSA5ikq3uA"
        }
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  render() {
    return <CommentList comments={this.state.comments}></CommentList>;
  }
}
export default CommentArea;
