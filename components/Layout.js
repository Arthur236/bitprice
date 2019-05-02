import React, { Fragment } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';

const Layout = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Head>
        <title>BitPrice</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i" rel="stylesheet" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" />

        <link rel="stylesheet" href="/static/css/style.css" />
      </Head>

      <Navbar />
      
      <div className="container">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
