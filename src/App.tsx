import React, { useEffect } from 'react';
import { createHashRouter, Outlet, useLoaderData } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getPostsAsync } from './features/Posts/postsSlice';
import './App.scss';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { PostPage } from './pages/Post';
import { getAllUsers } from './api/users';
import { User } from './type/User';

export async function rootLoader() {
  const response = await getAllUsers();

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
        id: "homepage",
        errorElement: <>Error on Homepage</>,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
        errorElement: <>Error on Homepage</>,
      },
    ],
  },
]);

function App() {
  const users = useLoaderData() as User[];
  // eslint-disable-next-line no-console
  console.log(users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch])

  return (
    <div className="App">
      <h1>React Template</h1>

      {users.map((user: User) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <Outlet/>     
    </div>
  );
}

export default App;
