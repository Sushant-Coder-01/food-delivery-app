import fetch from "node-fetch";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); 
const url =
  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&lat=18.61610&lng=73.72860";

const options = { method: "GET", headers: { accept: "application/json" } };


const fetchData = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.text(); 
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

app.get('/api/swiggy', async (req, res) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data); 
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

fetchData();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
