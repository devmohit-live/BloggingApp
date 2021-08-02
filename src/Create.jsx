import { Redirect } from "react-router-dom";
import { auth, firestore } from "./firebase";
import Form from "./Form";
let Create = (props) => {
  console.log(props.user);
  return (
    // <h1>{props.user.id}</h1>
    <div>
      {props.user ? (
        <>
          <h2>Hello {props.user.displayName}</h2>
          <Form user={props.user} />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Create;
