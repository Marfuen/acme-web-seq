const { Content, Page } = require('./models');
const { initDb } = require('./index');

initDb(true)
  .then(() => {
    const createPage = Page.create({
      name: 'Home'
    });
    const createContent = Promise.all([
      Content.create({
        title: 'Welcome Home 1',
        body: 'xoxoxo'
      }),
      Content.create({
        title: 'Welcome Home 2',
        body: 'xoxoxo'
      }),
    ]);
    return Promise.all([createPage, createContent]);
  })
  .then(([page, content])=> {
    return page.setContents(content);
  })
  .then(() => {
    const createPage = Page.create({
      name: 'Employees'
    });
    const createContent = Promise.all([
      Content.create({
        title: 'Moe',
        body: 'CEO'
      }),
      Content.create({
        title: 'Larry',
        body: 'CTO'
      }),
      Content.create({
        title: 'Curly',
        body: 'COO'
      }),
    ]);
    return Promise.all([createPage, createContent]);
  })
  .then(([page, content])=> {
    return page.setContents(content);
  })
  .then(() => {
    const createPage = Page.create({
      name: 'Contact'
    });
    const createContent = Promise.all([
      Content.create({
        title: 'Phone',
        body: '212-555-1212'
      }),
      Content.create({
        title: 'Fax',
        body: '212-555-1214'
      }),
      Content.create({
        title: 'Telex',
        body: '212-555-1213'
      }),
    ]);
    return Promise.all([createPage, createContent]);
  })
  .then(([page, content])=> {
    return page.setContents(content);
  })
  .then(() => {
    console.log('Database has been seeded');
    process.exit(0);
  })
  .catch((e) => {
    console.log(e)
  });
