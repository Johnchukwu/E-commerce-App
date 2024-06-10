const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// GET men items
router.get('/men', async (req, res) => {
  try {
    // Query the database for men items
    const menItems = await Item.find({ collection: 'men' });
    res.status(200).json(menItems);
  } catch (error) {
    console.error('Error fetching men items:', error);
    res.status(500).json({ message: 'Error fetching men items' });
  }
});

//POST MEN ITEMS
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
