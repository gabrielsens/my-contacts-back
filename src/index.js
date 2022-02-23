const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

/* app.use((request, response) => {
  request.appId = 'MeuAppId';
  response.send('Interceptado pelo Middleware');
}); */

/* app.use((request, response) => {
  // Midleware 2
});

app.use((request, response) => {
  // Midleware 3
});

app.use((request, response) => {
  // Midleware 4
}); */

app.use(express.json());

// Cors -> setando cors para localhost 3000
app.use(cors);

app.use(routes);

// Error Handler Sempre depois da definição da rota
// eslint-disable-next-line no-unused-vars
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(3001, () => console.log('Server started at http://localhost:3001'));

// Middleware 1 -> middleware2 -> ... -> ai vai para a Route...
