const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { pullData } = require('./scripts/puppeteer.js');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // Use body-parser middleware

// handles incoming POST requests
app.post('/api/data', async (req, res) => {
  const puppetData = await pullData(req.body['data']);
  res.json(puppetData);
});

// starts up the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
