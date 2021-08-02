import { Link, Redirect, BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase";
import "./Navbar.css";
function Navbar(props) {
  let allNavItems = document.querySelectorAll(".nav-link");
  for (let i = 0; i < allNavItems.length; i++) {
    allNavItems[i].addEventListener("click", function (e) {
      for (let j = 0; j < allNavItems.length; j++) {
        allNavItems[j].classList.remove("active");
      }

      e.currentTarget.classList.add("active");
    });
  }

  return (
    <>
      {props.user ? (
        <Router>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <Link
                class="navbar-brand"
                href="/view"
                onClick={() => {
                  <Redirect to="/view" />;
                }}
              >
                <span>
                  <img id="brand" src={props.user.photoURL} alt="" />
                </span>
                {"  " + props.user.displayName}
              </Link>
              <div id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <span>
                      <i class="fas fa-sign-out-alt"></i>
                    </span>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        auth.signOut();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Router>
      ) : (
        <Router>
          <Redirect to="/" />
        </Router>
      )}
    </>
  );
}

export default Navbar;
