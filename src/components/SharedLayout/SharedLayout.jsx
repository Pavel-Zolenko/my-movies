import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Header, Link } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        {/* <Suspense fallback={<>....</>}> */}
        <Outlet />
      </Suspense>
    </Layout>
  );
};
