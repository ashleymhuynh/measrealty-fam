import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { baseURL, config } from "../services";
import "./FamForm.css";

function FamForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [imgURL, setImgURL] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFam = {
      name,
      email,
      about,
      imgURL,
    };
    const famURL = `${baseURL}/fam`;
    await axios.post(famURL, { fields: newFam }, config);
    history.push("/new");
  };

  return (
    <div className="FamForm">
      <h1 id="header">Tell us about Yourself</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="about">About: </label>
        <textarea
          name="about"
          rows="5"
          cols="50"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />
        <label htmlFor="img">
          Img URL:{" "}
          <em>
            use {"  "}
            <a href="https://imgur.com/upload" target="_blank" rel="noreferrer">
              imgur.com
            </a>
          </em>
        </label>
        <input
          type="text"
          value={imgURL}
          onChange={(e) => setImgURL(e.target.value)}
          required
        />
        <button id="formsubmit">Submit</button>
      </form>
    </div>
  );
}
export default FamForm;
