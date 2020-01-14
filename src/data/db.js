/**
 * Setup our MongoDB connection to be passed into individual queries and mutations...
 */

const MongoClient = require('mongodb').MongoClient;
import config from '../config';

const DB = {
  getConnection: () => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        config.database,
        {
          poolSize: 1,
          useNewUrlParser: true,
          useUnifiedTopology: true
        },
        (err, client) => {
          if (!err) {
            resolve({
              connection: client.db(config.database_name),
              client: client
            });
          } else {
            reject(err);
          }
        }
      )
    });
  },
  find : (connection, query) => {
    return new Promise((resolve, reject) => {
      connection.collection("employee")
        .find(query)
        .limit(100)
        .toArray((err, docs) => {

          console.log(err);
          console.log('@@@@@@@@@@@@@@@');

          if (!err) {
            resolve(docs);
          } else {
            reject();
          }
        });
    });
  },
  update:  (connection, query, update, options) => {
    const { collection } = options;

    if (!query || !update) {
      return Promise.reject(new Error("Invalid query or update object"));
    };

    const mongoChange = {
      $set: update,
      $currentDate: {
        updated_at: true
      }
    };

    return new Promise((resolve, reject) => {
      connection.collection(collection).updateOne(query, mongoChange, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          console.log(err);
          reject();
        }
      });
    });
  }
};

export default DB;
