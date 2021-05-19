import { useState } from 'react';

import Backdrop from './Backdrop';
import ModalDialog from './Modal';
import { Card, Button } from "react-bootstrap";

function Todo({index, task, markTask, removeTask}) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
}

  return (
    <Card style={{ width: '26rem' }}>
      <Card.Body>
      <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.text}</span>
      <div className='actions'>
        <Button variant="outline-success"  style={{ margin: '0 10px', }} onClick={() => markTask(index)}>Completed</Button>
        <Button variant="outline-success" className='btn' onClick={deleteHandler}>Delete</Button>
      </div>
       {modalIsOpen && <ModalDialog onCancel={closeModalHandler} onConfirm={() => removeTask(index)} />}
       {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
       </Card.Body>
    </Card>
  );

};

export default Todo;
