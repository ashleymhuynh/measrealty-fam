import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import "./Wins.css";

function Wins() {
  const [winsData, setWinsData] = useState([]);
  useEffect(() => {
    const fetchWinsData = async () => {
      const winsURL = `${baseURL}/wins`;
      const resp = await axios.get(winsURL, config);
      setWinsData(resp.data.records);
    };
    fetchWinsData();
  });
  return (
    <div className="Wins">
      <h1 id="header">For The Win</h1>
      <Link to="/newwins">
        <button id="button">Celebrate Your Wins</button>
      </Link>
      <div className="holding-container">
        {winsData.map((win) => (
          <div className="status-container">
            <div className="user-info">
              <img
                src="https://i.imgur.com/WCMLfzk.jpeg"
                alt="meas realty logo"
                id="profile-pic"
              />
              <p id="user-name">{win.fields.name}</p>
              <p id="date">
                <small>{win.fields.timelog}</small>
              </p>
            </div>
            <p className="status-text">{win.fields.wins}</p>
            <div>
              <button id="like-button">🥳 {"        "}Wohoo!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wins;
