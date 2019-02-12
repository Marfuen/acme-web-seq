const db = require('./db');
const server = require('./api');

db.initDb()
  .then(() => {
    server.listen(3000, ()=>{
      console.log('Server is listening')
    });
  })
  .catch((e) => {
    console.log('Db did not connect:');
    console.error(e)
  });
