const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Calculation
router.get('/', async (req, res) => {
  const calculations = await loadCalculationsCollection();
  res.send(await calculations.find({}).toArray());
  //Test Purpose Only
  //res.send("Testing"); 
});

// Add Calculation Single 
// router.post('/', async (req, res) => {
//   const calculations = await loadCalculationsCollection();
//   await calculations.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   });
//      res.status(201).send({
//   });
// });

// Add Caculation Multiple 
router.post('/', async (req, res) => {
  const calculations = await loadCalculationsCollection();
  await calculations.insertOne({
    text: req.body.text,
    roomName: req.body.roomName,
    roomLength: req.body.roomLength,
    roomWidth: req.body.roomWidth,
    roomHeight: req.body.roomHeight,
    roomDeduction: req.body.roomDeduction,
    tileName: req.body.tileName, 
    tileLength: req.body.tileLength,
    tileWidth: req.body.tileWidth,
    tileGap: req.body.tileGap,
    tileAdjustment: req.body.tileAdjustment,
    tileBoxPieces: req.body.tileBoxPieces,
    tileBoxPrice: req.body.tileBoxPrice,
    createdAt: new Date()
  });
  res.status(201).send({
  });
});

// Delete Calculation
router.delete('/:id', async (req, res) => {
  const calculations = await loadCalculationsCollection();
  await calculations.deleteOne({ _id: new mongodb.ObjectID(req.params.id) 
  });
  res.status(200).send({});
});

async function loadCalculationsCollection() {
  const client = await mongodb.MongoClient.connect(
  // Connection to MongoDB
  "mongodb+srv://Test:Test@vueexpress.7vzq3.mongodb.net/vueExpress",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
// Get Calculation Collection 
  return client.db('vueExpress').collection('calculations');
}

module.exports = router;