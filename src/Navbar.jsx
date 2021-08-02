import {
  Link,
  BrowserRouter as Router,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import "./Navbar.css";
let Navbar = (props) => {
  return (
    <>
      <div>
        {" "}
        <NavLink to="/create">Hello</NavLink>
      </div>
    </>
  );
};

export default Navbar;
