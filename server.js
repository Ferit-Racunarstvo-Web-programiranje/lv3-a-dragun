const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  res.send('Pozdrav sa Railway servera!');
});

app.get('/slike', (req, res) => {
  const dataPath = path.join(__dirname, 'images.json');
  const images = JSON.parse(fs.readFileSync(dataPath));
  res.render('slike', { images });
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
