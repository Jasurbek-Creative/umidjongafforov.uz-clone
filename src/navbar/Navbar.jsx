import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="global_nav">
      <div className="nav_left-right">
        <div className="logo_nav">
          <img src={logo} alt="logo" />
          <p>Umidjon</p>
        </div>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
            <a href="#" className="">
              About
            </a>
            <a href="#">Projects</a>
            <a href="#">Resume</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="language">
        <img src="" alt="eng" />
      </div>
    </div>
  );
};

export default Navbar;
