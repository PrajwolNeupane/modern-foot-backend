import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./helper/dbConnection.js";
import AuthRoute from "./view/auth.view.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/auth", AuthRoute);

const port = process.env.PORT || 8000;

app.listen(port, async () => {
  console.log("Server is running on port 8000");
  await dbConnection;
});
