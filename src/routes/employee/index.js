/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Employee from './Employee';
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";

async function action({ fetch, params }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `
        {
          employee(id: "${params.id}") {
            email
            firstName
            lastName
            _id
          }
        }
`,
    }),
  });
  const { data } = await resp.json();
  const title = 'Employee Manager';

  // if (!data) throw new Error('Failed to load the employee.');
  return {
    title,
    chunks: ['home'],
    component: (
      <>
        <DashboardLayout>
          <Employee employee={data.employee} />
        </DashboardLayout>
      </>
    ),
  };
}

export default action;
