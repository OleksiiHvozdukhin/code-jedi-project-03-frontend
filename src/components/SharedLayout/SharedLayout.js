import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';

// import { Navigation } from 'components/TemporaryNavigation/TemporaryNavigation';
import { Loader } from 'components/Loader';
import { Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      {/* <Navigation /> */}
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};
