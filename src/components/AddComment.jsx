import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddComments() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="recensione">
        <Form.Label>Recensione:</Form.Label>
        <Form.Control type="text" placeholder="Scrivi qui il tuo commento" />

        <Form.Label>Valutazione:</Form.Label>
        <Form.Control type="number" min={1} max={5} placeholder="Valuta (da 1 a 5)" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddComments;
