/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Employees from './Employees';
import Layout from '../../components/Layout';
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";

async function action({ fetch, params }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: `
              {
                employees {
                  email
                  firstName
                  lastName
                  _id
                  department
                }
              }
            `,
    }),
  });
  const { data } = await resp.json();
  const title = 'Employee Manager';

  // hydrate employees
  data.employees.forEach(employee => {
    employee.addEmployee = false;
  });


  if (!data) throw new Error('Failed to load employees.');
  return {
    title,
    chunks: ['home'],
    component: (
      <>
        <DashboardLayout path={"/employees"}>
          <Employees _employees={data.employees} params={params} />
        </DashboardLayout>
      </>
    ),
  };
}

export default action;
