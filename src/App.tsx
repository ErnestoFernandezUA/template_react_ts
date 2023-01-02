import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getPostsAsync, selectPosts } from './features/Posts/postsSlice';
import './App.scss';

function App() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  // eslint-disable-next-line no-console
  console.log(posts);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch])

  return (
    <div className="App">
        React Template
      </div>
  );
}

export default App;
