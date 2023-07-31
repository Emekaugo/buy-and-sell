import mysql from "mysql";

let connection;

connection = mysql.createConnection({
  host: "localhost",
  user: "hapi-server",
  password: "abc123!",
  database: "buy-and-sell",
});

export const db = {
  connect: () =>
    // connection = mysql.createConnection({
    //     host: process.env.DB_HOST,
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASS,
    //     database: process.env.DB_NAME,
    //     socketPath: process.env.DB_SOCKET,
    // });
    connection.connect(),

  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve({ results, fields });
        }
      });
    }),
  end: () => connection.end(),
};
