const express = require('express');
const bodyParser = require('body-parser');

const productsRouter = require('./routers/productsRouter');
const salesRouter = require('./routers/salesRouter');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.send();
});

app.use(productsRouter);
app.use(salesRouter);

app.listen(3000, () => {
  console.log('Online');
});
