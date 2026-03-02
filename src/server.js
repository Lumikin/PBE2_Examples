import express from "express";
import path from "path";
import "dotenv/config";
import router from "./routes/routes.js";

const app = express();
app.use(express.json());

app.use("/", router);
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Servidor rodadndo em http://localhost:${process.env.SERVER_PORT}`,
  );
});
