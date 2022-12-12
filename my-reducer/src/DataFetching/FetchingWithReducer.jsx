import axios from 'axios';
import React, { useReducer } from 'react'
import { useEffect } from 'react';

const initialValue = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

const FetchingWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/3`)
        .then(res => {
            dispatch({type: 'SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({type: "ERROR" })
        })
    },[])

  return (
    <div>
      {state.loading ? (
        "Loading"
      ) : (
        <>
          <h2>{state.post.id}</h2>
          <h4>{state.post.title}</h4>
          <h5>{state.post.body}</h5>
        </>
      )}
      {state.error ? state.error : null}
    </div>
  );
};

export default FetchingWithReducer