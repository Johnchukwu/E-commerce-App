const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Get all accessories items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find({ collection: 'accessories' });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching accessories items' });
  }
});


// Post accessories item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;
