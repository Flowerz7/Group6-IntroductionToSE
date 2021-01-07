import React, { useRef } from "react";
import { Modal, Row, Col, Form } from "react-bootstrap";

export function ModalForm(props) {
  const bookingMessageRef = useRef();

  function handleOnSend() {
    const content = bookingMessageRef.current.value;
    props.handleBooking(content);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Your booking message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <textarea
              className="form-control"
              ref={bookingMessageRef}
              rows="3"
            ></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleOnSend} className="btn-secondary2">
          Send
        </button>
        <button className="btn-primary2" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
