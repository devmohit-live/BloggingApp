import { auth, firestore } from "./firebase";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
let View = (props) => {
  let [posts, setPosts] = useState(null);
  useEffect(() => {
    let f = async () => {
      if (props.user) {
        let tmp = [];
        let uid = "" + props.user.uid + "";
        let snapshot = await firestore
          .collection("posts")
          .where("uid", "==", uid)
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              tmp.push(doc);
              // console.log(doc.data());
            });
            setPosts(tmp);
          });
      }
    };
    f();
  }, []);

  console.log(posts);

  return (
    <div>
      {props.user != null ? (
        <>
          <h1>{props.user.displayName}</h1>
          <p>Email: {props.user.email}</p>
          <p>ID: {props.user.uid}</p>
          {/* <p>Posts: {posts.data}</p> */}
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
