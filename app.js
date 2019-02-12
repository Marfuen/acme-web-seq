const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send('Hello');
});


let myPort = process.env.PORT || 3000;
app.listen(myPort, ()=>{
  console.log(`App running on port: ${myPort}`)
});
