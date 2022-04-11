const express = require("express");
var cors = require("cors");
const pool = require("./db");
const app = express();

//var corsOption = { origin: "http://localhost:9000" };

app.use(cors()); // this need to be configured according to CORS
app.use(express.json()); // => req.body

const PORT = 8080;
const HOST = "0.0.0.0";
//var corsOption = { origin: "http://localhost:9000" };

//app.use(cors(corsOption)); // this need to be configured according to CORS
app.use(express.json()); // => req.body

// App

app.get('/', async (req, res) => {
  res.status(200).json({message: 'hello Docker',
  });
});

//GET all rows from table
app.get('/accounts', async (req, res) => {
  try {
    const allBundesliga = await pool.query(
      "SELECT * FROM accounts"
    );

    res.setHeader("Content-Type", "application/json");
    res.json(allBundesliga.rows); 

  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://localhost:${PORT}`);
});


