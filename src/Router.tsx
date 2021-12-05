import { Route, ReactLocation, MakeGenerics } from 'react-location';
import { Home } from './components/Home';
import { PostDetail } from './components/PostDetail';
import { PostIndex } from './components/PostIndex';
import { fetchPostById, fetchPosts } from './lib/fetchPosts';
import type { Post } from './types';

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    posts: Post[];
    post: Post;
  };
}>;

export const location = new ReactLocation();

export const routes: Route<LocationGenerics>[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'posts',
    children: [
      {
        path: '/',
        loader: async () => {
          return {
            posts: await fetchPosts(),
          };
        },
        element: <PostIndex />,
      },
      {
        path: ':postId',
        loader: async ({ params }) => {
          return {
            post: await fetchPostById(params.postId),
          };
        },
        element: <PostDetail />,
      },
    ],
  },
];
