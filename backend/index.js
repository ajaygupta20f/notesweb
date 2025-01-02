const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const noteRoutes = require('./routes/noteRoutes');

// Load environment variables
dotenv.config();

const app = express();

app.use(cors({
  origin: '*', // Allow all origins (use specific domains in production)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use(bodyParser.json());

app.use('/api/notes', noteRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Running API");
});

// Use PORT from .env, fallback to 5000 if not set
const PORT =  8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
