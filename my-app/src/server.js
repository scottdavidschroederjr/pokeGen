const express = require('express');
const cors = require('cors');
const { pullData } = require('./staticData/puppeteer.js')
const app = express();

app.use(cors());

// handles incoming POST requests
app.post('/api/data', async (req, res)  => {
  console.log(req.body);
  const puppetData = await pullData("pikachu");
  console.log(puppetData)
  res.json(puppetData);
});

// starts up the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
