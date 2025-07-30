import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@components/Layout/Layout';
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

import type { FC } from 'react';

const Home = React.lazy(() => import('@pages/Home/Home'));
const About = React.lazy(() => import('@pages/About/About'));
const Contact = React.lazy(() => import('@pages/Contact/Contact'));
const NotFound = React.lazy(() => import('@pages/NotFound/NotFound'));

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
