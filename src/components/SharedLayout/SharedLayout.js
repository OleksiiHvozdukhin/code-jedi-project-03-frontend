import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';

import { Navigation } from 'components/TemporaryNavigation/TemporaryNavigation';
import { Loader } from 'components/Loader';
import { BgImage, Wrapper } from './SharedLayout.styled';
import bg from '../../images/Desktop/Desktop Background element Main Page-1x.png';

export const SharedLayout = () => {
  return (
    <>
      <BgImage src={bg} />
      <Wrapper>
        <Navigation />
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Wrapper>
    </>
  );
};
