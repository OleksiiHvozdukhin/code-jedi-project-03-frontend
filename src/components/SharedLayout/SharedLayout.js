import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';

import { Navigation } from 'components/TemporaryNavigation/TemporaryNavigation';

export const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
