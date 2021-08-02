let Card = (props) => {
  let { title, postData, likes, comments } = props.data;

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{postData}</p>
      <p>Likes : {likes}</p>
      <div>
        {comments ? (
          <p>No Comments Yet!</p>
        ) : (
          <>
            <p>Comments: </p>
            <ul>
              {comments.map((el) => {
                return <li>el</li>;
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
