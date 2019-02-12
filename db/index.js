const db = require('./db');
const { Content, Page } = require('./models');

const initDb = (force = false) => {
  return db
  .authenticate()
    .then(() => {
      Page.hasMany(Content);
      Content.belongsTo(Page);

      return db.sync({ force })
    })
    .catch(() => console.log('Initialiazing Db has failed!'))
}

module.exports = {
  initDb,
  models: {
    Content,
    Page
  },
};
