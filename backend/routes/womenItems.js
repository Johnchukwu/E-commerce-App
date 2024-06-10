// routes/womenItems.js
const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Get women's items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find({ category: 'women' });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching women items' });
  }
});

//post women items
router.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
