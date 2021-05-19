import { Modal, Button } from 'react-bootstrap';

export default function ModalDialog(props) {

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
  <Modal.Dialog style={{ position: 'fixed', width: '42rem',  top: '10vh', margin:'auto',  left: '43vh', }}>
    <Modal.Header closeButton>
    <Modal.Title> Are you sure?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <p>When you close the window, your task will be deleted</p>
    </Modal.Body>
    <Button variant="success" onClick={cancelHandler}> Cancel </Button>
    <Button variant="secondary-success" onClick={confirmHandler}> Confirm </Button>
  </Modal.Dialog>
  )
}

