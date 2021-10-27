"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.get("/welcome", () => {
  return {
    status: "Access Success",
    message: "Hello world in JSON",
    dataUser: [
      {
        id: "1",
        email: "jonheri@email.com",
        fullname: "Jon Heri",
        address: "Jakarta Selatan",
      },
      {
        id: "2",
        email: "mr.jon@email.com",
        fullname: "Mr Jon",
        address: "Tanggerang Selatan",
      },
    ],
  };
});

Route.group(() => {
  Route.resource("hotels", "HotelController");
}).prefix("api/v1");
