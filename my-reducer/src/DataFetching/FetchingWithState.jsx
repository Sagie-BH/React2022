import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingWithState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/3`)
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <>
          <h2>{post.id}</h2>
          <h4>{post.title}</h4>
          <h5>{post.body}</h5>
        </>
      )}

      {error ? error : null}
    </div>
  );
}

export default FetchingWithState;
