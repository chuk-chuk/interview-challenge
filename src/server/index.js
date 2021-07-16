const express = require('express');
const items = require('./items');
const bodyParser = require('body-parser'); 

const app = express();
app.use(bodyParser.json()); 

const port = process.env.PORT || 8080;

const selectedList = []

app.use(express.static('dist'));

app.get('/api/items', (req, res) => {
  const query = req.query.name
  const filteredItems = items.filter(item => item.name.includes(query))

  if (query) {
    res.send({ items: filteredItems })
  } else {
    res.send({ items })
  }
});

app.get('/api/selectedItems', (req, res) => {
  const filteredList = selectedList.filter(item => !selectedList.includes(item.id))
  res.send({ items: filteredList })
});

app.post('/api/selectedItems', (req, res) => {
  var itemToAdd = req.body;
  selectedList.push(itemToAdd);
  res.send("Item added to preview list!");
});

app.delete('/api/selectedItems/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  selectedList.filter(item => item.id !== id)
  res.send("Item removed!");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
