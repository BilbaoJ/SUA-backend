const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routerApi = require('./routes/index');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

routerApi(app);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT);
