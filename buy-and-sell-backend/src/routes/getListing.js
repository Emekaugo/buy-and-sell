import Boom from "@hapi/boom";
import { db } from "../database";
// import { fakeListings } from "./fake-data";

export const getListingRoute = {
  method: "GET",
  path: "/api/listings/{id}",
  // handler: (req, h) => {
  //   const id = req.params.id;
  //   const listing = fakeListings.find((listing) => listing.id === id);
  //   if (!listing) {
  //     throw Boom.notFound(`listing does not exist with id ${id}`);
  //   } else {
  //     return listing;
  //   }
  // },
  handler: async (req, h) => {
    const id = req.params.id;
    const { results } = await db.query("SELECT * FROM listings WHERE id=?", [
      id,
    ]);
    const listing = results[0];
    if (!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);
    return listing;
  },
};
