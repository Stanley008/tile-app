const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Dependencies

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Deprecated
// app.use(bodyParser.json());
app.use(cors());

const calculations = require('./routes/api/calculations');

app.use('/api/calculations', calculations);

// Herokou Product
if(process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html", "client", "build", "index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Start ${port}`));