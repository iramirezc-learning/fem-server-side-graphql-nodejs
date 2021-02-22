/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your schema
 */

module.exports = {
  Query: {
    user(_, __, context) {
      return context.models.User.findOne();
    },
    pet(_, { input }, context) {
      return context.models.Pet.findOne((pet) => pet.id === input.id);
    },
    pets(_, { input }, context) {
      return context.models.Pet.findMany((pet) => pet.type === input.type);
    },
  },
  Pet: {
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300";
    },
  },
  Mutation: {
    pet(_, { input }, context) {
      return context.models.Pet.create(input);
    },
  },
};
