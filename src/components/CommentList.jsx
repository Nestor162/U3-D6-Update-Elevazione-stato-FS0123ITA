import { Alert, Badge, ListGroup } from "react-bootstrap";

const CommentList = props => {
  const currentComments = [...props.comments];

  if (currentComments.length < 1) {
    return (
      <Alert variant="warning" className="mb-3">
        Ancora non esistono commenti su questo libro!
      </Alert>
    );
  }
  return (
    <ListGroup className="mb-3">
      {currentComments.map(comment => {
        return (
          <ListGroup.Item>
            <div className="text-truncate">
              <em>{comment.author}</em>
            </div>
            <div>{comment.comment}</div>
            <Badge bg="danger">Rating: {comment.rate}⭐</Badge>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
