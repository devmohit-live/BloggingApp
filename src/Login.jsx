import "./Login.css";
import { signInWithGoogle, auth } from "./firebase";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let { displayName, email, uid, photoURL } = user;

        props.userHandler({ displayName, email, uid, photoURL });
        // console.log(user);
      } else {
        props.userHandler(user); // passing null
      }
    });
  }, []);

  return (
    <div>
      {props.user ? (
        // manual / forecull routing
        <Redirect to="/view" />
      ) : (
        <div className="mycontainer">
          {props.user ? <Redirect to="/view" /> : ""}

          <button
            onClick={signInWithGoogle}
            type="submit"
            className="btn btn-light m-4"
          >
            <img
              src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
              alt=""
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
