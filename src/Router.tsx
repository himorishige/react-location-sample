import { Route, ReactLocation } from 'react-location';
import { Home } from './components/Home';
import { PostDetail } from './components/PostDetail';
import { PostIndex } from './components/PostIndex';

export const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'posts',
    children: [
      {
        path: '/',
        element: <PostIndex />,
      },
      {
        path: ':postId',
        element: <PostDetail />,
      },
    ],
  },
];
