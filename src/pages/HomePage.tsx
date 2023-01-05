import { FunctionComponent } from "react";
import { Link, useRouteLoaderData } from 'react-router-dom'
import { Post } from "../type/Post";
 
export const HomePage: FunctionComponent = () => {
  const posts = useRouteLoaderData("root") as Post[];

  return (
    <>
      <h1>HomePage</h1>
      <ul style={{
        listStyle: 'none',
        textAlign: 'left',
      }}>
        {posts.map(post => (
          <li key={post.id}>
            <Link 
              to={`post/${post.id}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'grey',
                border: '1px solid grey',
                borderRadius: '10px',
                margin: '1rem',
                padding: '1rem',
                
              }}
            >
              {`${post.id}. ${post.title}: ${post.body}`}
            </Link>
          </li>
        ))}
      </ul>

    </>
  );
}
 