import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "regenerator-runtime";

export function ModalForm(props) {
  const messageRef = useRef();
  const [isBooking, setIsBooking] = useState(false);
  const { requirement } = props;

  async function handleOnSend() {
    const newRequirement = {
      ...requirement,
      type: "appointment",
      message: messageRef.current.value,
    };

    await axios.post("http://localhost:3000/requirements/add", newRequirement);

    setIsBooking(true);
  }

  const title = isBooking ? (
    <Modal.Title id="contained-modal-title-vcenter">Result</Modal.Title>
  ) : (
    <Modal.Title id="contained-modal-title-vcenter">
      Enter your message
    </Modal.Title>
  );

  const body = isBooking ? (
    <Modal.Body>
      <div className="mb-3">Your booking message has been sent!</div>
    </Modal.Body>
  ) : (
    <Modal.Body>
      <form>
        <div className="mb-3">
          <textarea
            className="form-control"
            ref={messageRef}
            rows="3"
          ></textarea>
        </div>
      </form>
    </Modal.Body>
  );

  return (
    <div className="modal">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>{title}</Modal.Header>
        {body}
        <Modal.Footer>
          {isBooking === false && (
            <button onClick={handleOnSend} className="btn-secondary2">
              Send
            </button>
          )}
          <button className="btn-primary2" onClick={props.onHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export function ModalReview(props) {
  const messageRef = useRef();
  const [rating, setRating] = useState(0);
  const { review } = props;

  function handleOnReview() {
    review(rating, messageRef.current.value);
  }

  const title = (
    <Modal.Title id="contained-modal-title-vcenter">
      Enter your review
    </Modal.Title>
  );

  const body = (
    <Modal.Body>
      <form>
        <div className="mb-3 star-review">
          {[...Array(5)].map((star, index) => {
            const numOfStar = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  value={numOfStar}
                  onClick={() => setRating(numOfStar)}
                />
                <i
                  style={{ color: numOfStar <= rating ? "#F2CB05" : "#BFBFBF" }}
                  className="fas fa-star"
                ></i>
              </label>
            );
          })}
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            ref={messageRef}
            rows="3"
          ></textarea>
        </div>
      </form>
    </Modal.Body>
  );

  return (
    <div className="modal">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>{title}</Modal.Header>
        {body}
        <Modal.Footer>
          <button onClick={handleOnReview} className="btn-secondary2">
            Send
          </button>
          <button className="btn-primary2" onClick={props.onHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
