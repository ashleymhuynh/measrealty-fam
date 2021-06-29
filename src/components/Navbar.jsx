import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link className="companylogo">
        <img
          src="https://i.imgur.com/WCMLfzk.jpeg"
          alt="logo"
          width="70"
          id="logo"
        />
        <h3>MEAS REALTY F.A.M</h3>
      </Link>
      <div className="navbar">
        <ul>
          <Link className="navlink">
            <li>New Fam</li>
          </Link>
          <Link className="navlink">
            <li>Wins</li>
          </Link>
          <Link className="navlink">
            <li>Events/Networking</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;