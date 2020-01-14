/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  const title = 'Employee Manager';

  const email = "joebloe2@gmail.com";

  // mutation example
  const createUser = async () => {
    const createUserResponse = await fetch('/graphql', {
      body: JSON.stringify({
        query: `mutation {
          createUser(email: "${email}") {
            id
          }
        }`,
      }),
    });
    const { data } = await createUserResponse.json();
    console.log(data);
  };

  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    title,
    chunks: ['home'],
    component: (
      <>
        <Layout>
          <Home params={params} />
        </Layout>
      </>
    ),
  };
}

export default action;
