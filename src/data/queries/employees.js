/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// needed to define the type for the GraphQL
import EmployeeType from '../types/EmployeeType';
import {GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull} from 'graphql';
import { uuid} from "uuidv4";
import DB from '../db';

const employees = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(EmployeeType))),
  async resolve(request, {}) {
    const {connection, client} = await DB.getConnection();
    const employeesResult = await DB.find(connection, {}, );

    // convert ObjectID toString() for easy use on the frontend
    employeesResult.forEach(employee => employee._id.toString());

    return (employeesResult);
  },
};

export default employees;
