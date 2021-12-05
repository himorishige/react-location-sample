import { Route, ReactLocation, MakeGenerics } from 'react-location';
import { ReactLocationSimpleCache } from 'react-location-simple-cache';
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

export const routeCache = new ReactLocationSimpleCache();

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
        loader: routeCache.createLoader(
          async () => {
            return {
              posts: await fetchPosts(),
            };
          },
          {
            policy: 'cache-and-network',
          },
        ),
        element: <PostIndex />,
      },
      {
        path: ':postId',
        loader: routeCache.createLoader(
          async ({ params }) => {
            return {
              post: await fetchPostById(params.postId),
            };
          },
          {
            policy: 'cache-first',
          },
        ),
        element: <PostDetail />,
      },
    ],
  },
];
