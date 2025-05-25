const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('LostLand sistema veikia!');
});

app.listen(port, () => {
  console.log(`Serveris paleistas ant http://localhost:${port}`);
});
