import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import "./Wins.css";

function Wins() {
  const [winsData, setWinsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const winsURL = `${baseURL}/wins`;
      const resp = await axios.get(winsURL, config);
      setWinsData(resp.data.records);
    };
    fetchData();
  });
  return (
    <div className="Wins">
      <h1 id="header">For The Win</h1>
      <Link to="/winning">
        <button id="button">Your Win(s)</button>
      </Link>
      <div className="container">
        {winsData.map((win) => (
          <div className="user-status">
            <img
              src="https://i.imgur.com/WCMLfzk.jpeg"
              alt="meas realty logo"
              id="profile-pic"
            />
            <p id="user-name">{win.fields.name}</p>
            {/* <small>{win.createdTime}</small> */}
            <p className="status-text">{win.fields.wins}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wins;
