import { VFC } from 'react';
import { Link, useMatch } from 'react-location';
import { LocationGenerics } from '../Router';

export const PostIndex: VFC = () => {
  const {
    data: { posts },
  } = useMatch<LocationGenerics>();

  if (!posts) return null;

  return (
    <div>
      <h1>Post Index</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
