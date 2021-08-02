import { useState } from "react";
import { firestore } from "./firebase";
let Form = (props) => {
  let uid = props.user.uid;
  let [title, setTitle] = useState("");
  let [postData, setData] = useState("");
  let [comments, setComments] = useState([]);
  let [likes, setLikes] = useState(0);

  let submitForm = async () => {
    if (title && postData) {
      let data = {
        title,
        postData,
        comments,
        likes,
        uid,
      };
      console.log(data);
      
      await firestore
        .collection("posts")
        .add({ title, postData, comments, likes, uid });
        console.log("Success");
      setTitle("");
      setData("");
    }
  };

  return (
    <>
      <form>
        <div className="col-10">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e) => {
              title = e.currentTarget.value;
              title = title.trim();
              setTitle(title);
            }}
          />
        </div>

        <div className="col-10">
          <label for="exampleInputPassword1" className="form-label">
            Blog
          </label>
          <textarea
            type="text"
            className="form-control"
            id="textarea"
            onChange={(e) => {
              postData = e.currentTarget.value;
              postData = postData.trim();
              setData(postData);
            }}
          />
        </div>

        <button className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
