const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, '..', 'build');
const port = 8000

app.use(cors());
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
})

app.get('/test', (req, res) => {
	res.sendFile("is live!");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});