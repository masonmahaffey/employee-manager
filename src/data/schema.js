/**
 * Defines the GraphQL query structure(schema) tying in the endpoints(resolvers) into the query hierarchy
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import createUser from "./mutations/createUser";
import employee from './queries/employee';
import employees from "./queries/employees";


const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      employee,
      employees
    }
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    description: 'These are the things we can change',
    fields: {
      createUser
    }
  })
});



export default schema;
