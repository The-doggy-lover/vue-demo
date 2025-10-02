const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:8081'  // matches your Vue dev server port
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/pets', (req, res) => {
  res.json([
    { id: 1, name: 'Fido', breed: 'Labrador' },
    { id: 2, name: 'Whiskers', breed: 'Siamese' }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
