import { Route } from 'react-location';
import { fetchPosts } from '../lib/fetchPosts';
import { LocationGenerics, routeCache } from '../Router';

export const PostIndexModule: Route<LocationGenerics> = {
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
  element: () => import('./PostIndex').then((module) => <module.PostIndex />),
};
