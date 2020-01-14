/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// needed to define the type for the GraphQL
import User from "../models/User";
import {GraphQLInt, GraphQLString} from 'graphql';
import { uuid} from "uuidv4";
import EmployeeType from "../types/EmployeeType";
import DB from '../db';

const createEmployee = {
  type: EmployeeType,
  description: 'Creates an employee',
  args: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    department: { type: GraphQLString }
  },
  async resolve(request, {email, firstName, lastName, department}) {
    const { connection, client } = await DB.getConnection();
    const {result} = await DB.create(connection,
      {
        email: email,
        firstName: firstName,
        lastName: lastName,
        department: department
      });

    console.log(email);
    console.log(firstName);
    console.log(lastName);
    console.log(department);
    console.log(result);
    console.log('*************************************')

    return ({
      firstName: firstName
    });
  },
};


export default createEmployee;
