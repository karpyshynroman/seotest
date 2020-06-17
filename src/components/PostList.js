import React, {useState, useEffect} from 'react';
import { useHistory, useLocation } from "react-router-dom";

const PostList = () => {

  const [state, setState] = useState({
    listOfPosts: []
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`);
        const json = await response.json();
        const prepearedData = json.slice(0, 10);
        setState({
          listOfPosts: prepearedData
        })
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <h1>All posts</h1>
      {console.log('sdsdsd',state)}
      <ul>
        {state.listOfPosts && state.listOfPosts.map(item => <li>{item.title}</li>)}
      </ul>
    </>
  );
};

export default PostList;
