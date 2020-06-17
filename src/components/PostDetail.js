import React, {useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";

const PostDetail = () => {
  const [state, setState] = useState({
    post: {body: '', title: ''}
  });

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts${history.location.pathname}`);
        const json = await response.json();
        setState({
          post: json
        })
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);


  return (
    <> {state.post.title &&
    <div>
      <h2>{state.post.title}</h2>
      <article>{state.post.body}</article>
      <p><Link to={'/'}>Back to posts</Link></p>
    </div>}
    </>
  );
};

export default PostDetail;
