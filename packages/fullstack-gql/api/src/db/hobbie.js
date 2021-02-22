const createHobbieModel = (db) => {
  return {
    findMany(filter) {
      return db.get("hobbie").filter(filter).value();
    },
  };
};

module.exports = createHobbieModel;
