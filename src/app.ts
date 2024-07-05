import { json } from "body-parser";
import express from "express";
import apiRoute from "./routes/api.route";

const app = express();

app.use(json());

app.use("/api", apiRoute);

app.listen(3000);
