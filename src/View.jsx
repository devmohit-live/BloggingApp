import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
let View = (props) => {
  return (
    <div>
      {props.user != null ? (
        <>
          <h1>{props.user.displayName}</h1>
          <p>Email: {props.user.email}</p>
          <p>ID: {props.user.uid}</p>
          <img src={props.user.photoURL} alt="" />
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default View;
