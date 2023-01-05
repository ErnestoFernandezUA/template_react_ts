import { FunctionComponent } from "react";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import { Post } from "../type/Post";

export const PostPage: FunctionComponent = () => {
  let { id } = useParams();
  console.log(id);
  const posts = useRouteLoaderData("root") as Post[];

  const post = posts.find(post => String(post.id) === String(id));

  console.log(posts);

  return (
    <div style={{
      width: '50rem',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'pink',
      borderRadius: '1rem',
      padding: '1rem',

    }}>
      <Link 
        to={'/'}
        style={{
          alignSelf: 'start',
          width: '5rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          padding: '0.2rem 0',
          textDecoration: 'none',
          color: 'grey',
        }}
      >
        Back
      </Link>

      {post ? (
        <div>
          <h1>PostPage: {post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <>
          post doesn't exist
        </>
      )
      }
    </div>
  )
}
