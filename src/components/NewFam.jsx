import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import "./NewFam.css";

function NewFam() {
  const [famsData, setfamsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const famURL = `${baseURL}/fam`;
      const resp = await axios.get(famURL, config);
      setfamsData(resp.data.records);
    };
    fetchData();
  }, []);

  return (
    <div className="NewFam">
      <h1 id="header">Welcome to the F.A.M.</h1>
      <Link to="/newfam">
        <button id="button">Introduce Yourself</button>
      </Link>
      <div className="container">
        {famsData.map((fam) => (
          <div key={fam.id} className="fam-container">
            <img src={fam.fields.imgURL} alt={fam.fields.name} id="img" />
            <h3>{fam.fields.name}</h3>
            <p>{fam.fields.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NewFam;
