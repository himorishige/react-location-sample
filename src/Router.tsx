import { Route, ReactLocation, MakeGenerics } from 'react-location';
import { ReactLocationSimpleCache } from 'react-location-simple-cache';
import { Home } from './components/Home';
import { PostIndex } from './components/PostIndex';
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
        import: () =>
          import('./components/PostIndex.module').then(
            (module) => module.PostIndexModule,
          ),
      },
      {
        path: ':postId',
        import: () =>
          import('./components/PostDetail.module').then(
            (module) => module.PostDetailModule,
          ),
      },
    ],
  },
];
