import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [famsData, setfamsData] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const famURL = `${baseURL}/fam`;
      const resp = await axios.get(famURL, config);
      setfamsData(resp.data.records);
    };
    fetchData();
  });
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
