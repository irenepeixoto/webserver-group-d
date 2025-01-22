import express from "express";

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
