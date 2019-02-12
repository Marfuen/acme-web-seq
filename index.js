const db = require('./db');
const server = require('./api');

db.initDb()
  .then(() => {
    let myPort = process.env.PORT || 3000;
    server.listen(myPort, ()=>{
      console.log(`App running on port: ${myPort}`)
    });
  })
  .catch((e) => {
    console.log('Db did not connect:');
    console.error(e)
  });
