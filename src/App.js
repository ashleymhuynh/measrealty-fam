import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewFam from "./components/NewFam";
import Wins from "./components/Wins";
import FamForm from "./components/FamForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <img
          src="https://i.imgur.com/G5ODmWc.png"
          alt="meas realty fam"
          id="headerlogo"
        />
        <p>
          Welcome! We are so excited to have you as part of the F.A.M.! We are
          confident that someone with your skill, knowledge, and swag will be a
          great value to the community, especially for those you serve. Speaking
          of community, The Meas Realty Team (M.R.T) wanted to create a platform
          for Future Agents In the Making to come together and celebrate your
          wins(big or small).
        </p>
      </Route>
      <Route path="/new">
        <NewFam />
      </Route>
      <Route path="/newfam">
        <FamForm />
      </Route>
      <Route path="/wins">
        <Wins />
      </Route>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
