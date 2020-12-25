import React from 'react';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang="en" />
        <meta name="description" content="Page not found" />
      </Helmet>
      <div>404</div>
    </>
  );
};
