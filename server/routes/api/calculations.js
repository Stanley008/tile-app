const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

/// Get Calculation
router.get('/', async (req, res) => {
  const calculations = await loadCalculationsCollection();
  //string? text? array?
 res.send(await calculations.find({}).toArray());
 
  //testing purpose
 // res.send("Testing");
});

// // Add Calculation Single... 
// router.post('/', async (req, res) => {
//   const calculations = await loadCalculationsCollection();
//   await calculations.insertOne({
//     text: req.body.text,
//     createdAt: new Date()
//   });
//   res.status(201).send({});
// });

// ADD caculation multiple 
router.post('/', async (req, res) => {
  const calculations = await loadCalculationsCollection();
  await calculations.insertOne({
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
  res.status(201).send({});
});

// // Delete Calculation
router.delete('/:id', async (req, res) => {
  const calculations = await loadCalculationsCollection();
  await calculations.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadCalculationsCollection() {
  const client = await mongodb.MongoClient.connect(
    //Working Finnaly
    "mongodb+srv://Test:Test@vueexpress.7vzq3.mongodb.net/vueExpress",
    {
      //If we dont use it... it will throw warning...
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
///to get the calculation collection... 
  return client.db('vueExpress').collection('calculations');
}

module.exports = router;