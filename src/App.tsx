import { VFC } from 'react';
import { Router, Outlet, Link } from 'react-location';
import { routes, location } from './Router';

export const App: VFC = () => {
  return (
    <Router routes={routes} location={location}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </div>
      <Outlet /> {/* パスが一致した際にレンダリングされるコンポーネント */}
    </Router>
  );
};
