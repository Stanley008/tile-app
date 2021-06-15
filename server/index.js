const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Dependencies
app.use(bodyParser.json());
app.use(cors());

const calculations = require('./routes/api/calculations');

app.use('/api/calculations', calculations);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Start ${port}`));