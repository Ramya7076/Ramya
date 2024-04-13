const express = require('express');
const axios = require('axios');

const app = express();

// Define a new GET route for fetching holdings
app.get('/holdings', async (req, res) => {
  try {
    // Make a GET request to Upstox's API endpoint for fetching holdings
    const response = await axios.get('https://api.upstox.com/live/v1/holdings', {
      headers: {
        'X-API-KEY': 'your-api-key',
        'Authorization': 'Bearer your-access-token'
      }
    });

    // Return the response data as JSON
    res.json(response.data);
  } catch (error) {
    // If there's an error, return an error response
    res.status(500).json({ error: error.message });
  }
});

// Start the Express.js server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
