const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/swiggy', async (req, res) => {
  try {
    const response = await axios.get();
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching Swiggy data');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
