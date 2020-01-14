/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// needed to define the type for the GraphQL
import UserType from '../types/UserType';
import User from "../models/User";
import {GraphQLInt, GraphQLString} from 'graphql';
import { uuid} from "uuidv4";

const createUser = {
  type: UserType,
  description: 'Creates a user to then be retrieved/updated/deleted',
  args: {
    email: { type: GraphQLString }
  },
  async resolve(request, {email}) {
    const res  = await User.create({ id: uuid(), email: email, emailConfirmed: true });
    return ({
      id: res.id
    });
  },
};


export default createUser;
