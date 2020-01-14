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

const me = {
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  async resolve(request, {id}) {
    const user = await User.findOne({
      where: {
        id: id
      }
    });

    return ({
      email: user.email,
      id: user.id
    });
  },
};

export default me;
