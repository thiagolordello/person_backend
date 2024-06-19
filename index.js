const express = require('express');
const cors = require('cors');
const routes = require('./routers/routs');
//const tknMidd = require('./middlewares/validToken');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/', routes.register_it_router);
app.use('/', routes.appCategoryRouter);
app.use('/',routes.companyRouter);
// app.use('/tasks', tknMidd, routes.tasksByUserContrl);
// app.listen(3001, () => {
//   console.log('Escutando na porta 3001');
// });

//const app = require('./app');

app.listen(3001, () => {
  console.log('Escutando na porta 3001');
});

module.exports = app;
