import { Route } from 'react-location';
import { fetchPostById } from '../lib/fetchPosts';
import { LocationGenerics, routeCache } from '../Router';

export const PostDetailModule: Route<LocationGenerics> = {
  loader: routeCache.createLoader(
    async ({ params }) => {
      return {
        post: await fetchPostById(params.postId),
      };
    },
    { policy: 'cache-first' },
  ),
  element: () => import('./PostDetail').then((module) => <module.PostDetail />),
};
