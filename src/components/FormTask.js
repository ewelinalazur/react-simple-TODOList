import React from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormTask({addTask}) {
  const [value, setValue] = React.useState("");

  const buttonSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <Form onSubmit={buttonSubmit}>
    <Form.Group>
      <Form.Label><b>Add your Task!</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="success" type="submit" style= {{ margin: '8px 10px', float: 'right', }}>
      Submit
    </Button>
  </Form>
  );
}
