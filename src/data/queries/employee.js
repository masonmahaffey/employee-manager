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
import {GraphQLInt, GraphQLString} from 'graphql';
import { uuid} from "uuidv4";
import DB from '../db';
const ObjectID = require('mongodb').ObjectID;

const employee = {
  type: EmployeeType,
  args: {
    id: { type: GraphQLString }
  },
  async resolve(request, {id}) {

    const {connection, client} = await DB.getConnection();
    const employeeResult = await DB.find(connection, {
      _id: new ObjectID(id)
    }, );

    return ({
      _id: employeeResult[0]._id.toString(),
      email: employeeResult[0].email,
      department: employeeResult[0].department,
      firstName: employeeResult[0].firstName,
      lastName: employeeResult[0].lastName
    });
  },
};

export default employee;
