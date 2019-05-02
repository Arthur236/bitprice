import React from 'react';
import Fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Home = (props) => (
  <Layout>
    <div>
      <h2>Welcome To BitPrice</h2>
      <p>Your one stop Bitcoin rate monitor</p>

      <h3>Current Bitcoin rates</h3>
      {
        props.bpi && <Prices bpi={props.bpi} />
      }
    </div>
  </Layout>
);

Home.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  const data = await res.json();

  return {
    bpi: data.bpi,
  }
}

export default Home;
