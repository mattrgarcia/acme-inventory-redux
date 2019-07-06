const express = require('express');
const app = express();
const router = express.router();
const {models, syncAndSeed } = require('./db');
const { Product } = models;

syncAndSeed();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

router.get('/', async (req, res, next) => {
try {
  res.send(await Product.findAll())
}
catch (ex){
  console.log(ex);
}
})
