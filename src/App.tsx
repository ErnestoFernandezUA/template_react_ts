import React, { useEffect } from 'react';
import { createHashRouter, Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getPostsAsync, selectPosts } from './features/Posts/postsSlice';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { getAllPosts } from './api/post';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/Post';

export async function rootLoader() {
  const response = await getAllPosts();

  return response;
}

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    loader: rootLoader,
    id: "root",
    children: [
      {
        path: "/",
        element: <HomePage />,
        id: "homepage"
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
    ],
  },
]);

function App() {
  const dispatch = useAppDispatch();
  // const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch])

  return (
    <div className="App">
      <h1>React Template</h1>

      <Outlet/>     
    </div>
  );
}

export default App;
