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
    {
      policy: 'cache-first',
      maxAge: 1000 * 60, // キャッシュを利用する時間を60秒に
    },
  ),
  element: () => import('./PostDetail').then((module) => <module.PostDetail />),
};
