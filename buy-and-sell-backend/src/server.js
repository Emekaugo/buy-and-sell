// import dotenv from 'dotenv';
// dotenv.config();
// import Hapi from '@hapi/hapi';
// import * as admin from 'firebase-admin';
// import routes from './routes';
// import { db } from './database';
// import credentials from '../credentials.json';

// admin.initializeApp({
//     credential: admin.credential.cert(credentials),
// });

// let server;

// const start = async () => {
//     server = Hapi.server({
//         port: 8080,
//         host: '0.0.0.0',
//     });

//     routes.forEach(route => server.route(route));

//     db.connect();
//     await server.start();
//     console.log(`Server is listening on ${server.info.uri}`);
// }

// process.on('unhandledRejection', err => {
//     console.log(err);
//     process.exit(1);
// });

// process.on('SIGINT', async () => {
//     console.log('Stopping server...');
//     await server.stop({ timeout: 10000 });
//     db.end();
//     console.log('Server stopped');
//     process.exit(0);
// });

// start();

/////////////////////////////////////////////////////////////////////////////

// import dotenv from 'dotenv';
// dotenv.config();
import Hapi from "@hapi/hapi";
import * as admin from "firebase-admin";
import routes from "./routes";
import { db } from "./database";
import credentials from "../credentials.json";

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

let server;

const start = async () => {
  server = Hapi.server({
    port: 8000,
    host: "localhost",
  });

  routes.forEach((route) => server.route(route));

  //   server.route({
  //     method: "POST",
  //     path: "/hello",
  //     handler: (req, h) => {
  //       const payload = req.payload;
  //       const name = payload.name;
  //       return `hello ${name}`;
  //       // return h.response('Hello World!').code(200);
  //     },
  //   });

  db.connect();
  await server.start();
  console.log(`Server is listening on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log("error: ", err);
  process.exit(1);
});

process.on("SIGINT", async () => {
  console.log("Stopping server...");
  await server.stop({ timeout: 10000 });
  db.end();
  console.log("Server stopped");
  process.exit(0);
});

start();
