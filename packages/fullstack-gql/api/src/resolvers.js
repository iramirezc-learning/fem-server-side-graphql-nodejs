/**
 * Here are your Resolvers for your Schema.
 * They must match the type definitions in your schema.
 */
module.exports = {
  Query: {
    user(_, __, context) {
      return context.models.User.findOne();
    },
    pet(_, { input }, context) {
      return context.models.Pet.findOne(input);
    },
    pets(_, { input }, context) {
      return context.models.Pet.findMany(input);
    },
  },
  Mutation: {
    pet(_, { input }, context) {
      return context.models.Pet.create(input);
    },
  },
  Pet: {
    __resolveType(pet) {
      if (pet.barks) {
        return "Dog";
      } else if (pet.meows) {
        return "Cat";
      } else {
        return "Parrot";
      }
    },
  },
  Dog: {
    img() {
      return "https://placedog.net/300/300";
    },
  },
  Cat: {
    img() {
      return "http://placekitten.com/300/300";
    },
  },
  Parrot: {
    img() {
      return "http://placebeard.it/g/640/480";
    },
  },
};
