const express = require('express')
const cors = require('cors');
const { pullData } = require('./staticData/puppeteer.js')
const app = express()
const port = 3001

app.use(cors());



//handles incoming POST requests
app.post('/api/data', (req, res) => {
  console.log("we made it")
  const puppetData = pullData(req.body)
  console.log(pullData)

  res.json(puppetData)
});

//starts up the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
