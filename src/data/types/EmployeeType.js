/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const EmployeeType = new ObjectType({
  name: 'Employee',
  fields: {
    _id: { type: StringType },
    email: { type: StringType },
    department: { type: StringType },
    firstName: { type: StringType },
    lastName: { type: StringType }
  },
});

export default EmployeeType;
