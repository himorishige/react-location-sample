import { VFC } from 'react';
import { useMatch } from 'react-location';

import type { LocationGenerics } from '../Router';

export const PostDetail: VFC = () => {
  const {
    data: { post },
  } = useMatch<LocationGenerics>();

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};
