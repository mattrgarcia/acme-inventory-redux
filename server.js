const express = require('express');
const app = express();
const router = express.Router();
const {models, syncAndSeed } = require('./db');
const { Product } = models;

syncAndSeed();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

router.get('/api/products', async (req, res, next) => {
try {
  res.send(await Product.findAll())
}
catch (ex){
  console.log(ex);
}
})

router.post('/api/products', async (req, res, next) => {
  try {
    res.send(await Product.req.body)
  }
  catch (ex) {
    console.log(ex)
  }
})

router.delete('/api/products', async (req, res, next) => {
  try {
  await Product.remove(req.body)
  }
  catch (ex) {
    console.log(ex)
  }
})
