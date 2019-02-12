const express = require('express');
const { models } = require('../db');
const app = express();
const home = require('../views/home');

app.use((req,res, next)=>{
  models.Page.findAll({
    attributes: ['name', 'id']
  })
  .then((names) => {
    req.pageNames = names.map(page => {
      return {
        name: page.dataValues.name,
        id: page.dataValues.id,
      }
    })
    next()
  })
})

app.get('/', (req,res)=>{
  res.redirect('/pages/1')
})

app.get('/pages/:id', (req,res,next)=>{
  const id = req.params.id;

  if(typeof id === 'string'){
    models
    .Page
    .findByPk(Number(id), {
      include: [models.Content]
    })
    .then((page) => {
      if (!page){
        res.sendStatus(404);
      }
      const { name, contents } = page;
      res.send(home(name, req.pageNames, contents))
    })
  } else {
    res.sendStatus(404);
  }
})

module.exports = app;
