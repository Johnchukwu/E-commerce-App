const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const womenItemsRouter = require('./routes/womenItems'); 
const accessoriesItemsRouter = require('./routes/accessoriesItems');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://John:Johnbull4u@atlascluster.uuhkipz.mongodb.net/E-commerce?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);
app.use('/api/items/women', womenItemsRouter); 
app.use('/api/items/accessories', accessoriesItemsRouter);

// Start the server
const PORT = process.env.PORT || 5020;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
