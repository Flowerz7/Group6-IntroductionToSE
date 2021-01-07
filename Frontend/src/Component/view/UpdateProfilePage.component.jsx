import React, { useRef, useState } from "react";
import { storage } from "../../firebase";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function UpdateProfilePage(props) {
  const nameRef = useRef();
  const genderRef = useRef();
  const majorRef = useRef();
  const overviewRef = useRef();
  const descriptionRef = useRef();
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const history = useHistory();

  function validate() {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    if (name === null || description === null || image === null) {
      setError("Please fill all empty field!");
      return false;
    }

    return true;
  }

  function handleOnChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function handleOnSumbit(e) {
    e.preventDefault();

    const isValid = validate();

    if (isValid === false) {
      return;
    }

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);

            const newProfile = {
              Name: nameRef.current.value,
              Gender: genderRef.current.value,
              Major: majorRef.current.value,
              overview: overviewRef.current.value,
              Description: descriptionRef.current.value,
              Image: url,
            };

            const email = props.match.params.email;

            console.log(`Email: ${email}`);

            // call axios store profile to database:

            console.log(`Profile: ${JSON.stringify(newProfile)}`);
            history.push("/login");
          });
      }
    );
  }

  return (
    <div className="form-container">
      <form>
        <h1>Create your profile</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" ref={nameRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Avatar</label>
          <input
            onChange={handleOnChange}
            className="form-control"
            type="file"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Major</label>
          <select
            className="form-select"
            ref={majorRef}
            aria-label="Default select example"
          >
            <option defaultValue value="Mail">
              Information Technology
            </option>
            <option value="Female">Art and design</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            ref={genderRef}
            aria-label="Default select example"
          >
            <option defaultValue value="Mail">
              Male
            </option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Overview</label>
          <textarea
            className="form-control"
            ref={overviewRef}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            ref={descriptionRef}
            rows="3"
          ></textarea>
        </div>
        <button onClick={handleOnSumbit} className="btn-secondary2">
          Done
        </button>
      </form>
    </div>
  );
}
