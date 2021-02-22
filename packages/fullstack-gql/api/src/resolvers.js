const userResolver = function (_, __, context) {
  return context.models.User.findOne();
};

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
    favorites(_, { input }, context) {
      const hobbies = context.models.Hobbie.findMany(input);
      const pets = context.models.Pet.findMany(input);

      return pets.concat(hobbies);
    },
  },
  Mutation: {
    pet(_, { input }, context) {
      return context.models.Pet.create(input);
    },
  },
  User: {
    pets(_, { input }, context) {
      // I don't care if the user has a relation with the pets, I will just return all of them
      return context.models.Pet.findMany(input);
    },
    hobbies(_, { input }, context) {
      // I don't care if the user has a relation with the hobbies, I will just return all of them
      return context.models.Hobbie.findMany(input);
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
    user: userResolver,
  },
  Cat: {
    img() {
      return "http://placekitten.com/300/300";
    },
    user: userResolver,
  },
  Parrot: {
    img() {
      return "http://placebeard.it/g/640/480";
    },
    user: userResolver,
  },
  Hobbie: {
    user: userResolver,
  },
  Favorite: {
    __resolveType(obj) {
      if (obj.barks) {
        return "Dog";
      } else if (obj.meows) {
        return "Cat";
      } else if (obj.talks) {
        return "Parrot";
      } else {
        return "Hobbie";
      }
    },
  },
};
