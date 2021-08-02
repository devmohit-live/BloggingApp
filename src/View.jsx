import { auth, firestore } from "./firebase";
import { Redirect, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./View.css";
let View = (props) => {
  let [posts, setPosts] = useState(null);
  useEffect(() => {
    let f = async () => {
      if (props.user) {
        let uid = "" + props.user.uid + "";
        let tmp = [];
        await firestore
          .collection("posts")
          .where("uid", "==", uid)
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              tmp.push(doc);
              console.log(doc.data());
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
          <div className="welcome">
            <h1>{props.user.displayName}</h1>
            {posts?(<p className="blogdetials">You have created : {posts.length} Blog</p>):("Loading!!")}
            
            <Link to="/create">
              <button type="button" class="btn btn-primary">
                <span>
                  <i class="fas fa-edit"></i>
                </span>
                Create Post
              </button>
            </Link>
          </div>

          {/* <p>Email: {props.user.email}</p>
          <p>ID: {props.user.uid}</p> */}
          {/* <img src={props.user.photoURL} alt="" /> */}

          <h2 id="blogsPanel">Your Blogs : </h2>
          {posts ? (
            posts.map((post) => {
              return <Card data={post.data()} />;
            })
          ) : (
            <p>Loading!!</p>
          )}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default View;
