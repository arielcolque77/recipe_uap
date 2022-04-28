import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static("public"));
app.get("/recipes/:query", async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${req.params.query}&app_id=74a34c81&app_key=b6c93d43f1d94342d37d48ec3dbc71ab`
  );
  console.log(response.data.hits);
  res.json(response.data.hits);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port 5000`);
});
