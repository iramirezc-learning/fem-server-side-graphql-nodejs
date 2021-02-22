const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("api/src/db/db.json");
const db = low(adapter);

const createPetModel = require("./pet");
const createUserModel = require("./user");
const createHobbieModel = require("./hobbie");

module.exports = {
  models: {
    Pet: createPetModel(db),
    User: createUserModel(db),
    Hobbie: createHobbieModel(db),
  },
  db,
};
