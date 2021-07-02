import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { baseURL, config } from "../services";
import "./WinsForm.css";

function WinsForm(props) {
  const [name, setName] = useState("");
  const [wins, setWins] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWins = {
      name,
      wins,
    };
    const winsURL = `${baseURL}/wins`;
    await axios.post(winsURL, { fields: newWins }, config);
    history.push("/wins");
  };
  return (
    <div className="WinsForm">
      <h1 id="header">Tell us Your Win</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* <label htmlFor="name">Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <label htmlFor="wins">Your Wins(big or small): </label>
        <textarea
          type="text"
          rows="10"
          cols="50"
          value={wins}
          onChange={(e) => setWins(e.target.value)}
          required
        />

        <button id="formsubmit">Submit</button>
      </form>
      ;
    </div>
  );
}
export default WinsForm;
