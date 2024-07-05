import { json } from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import restApiRoute from "./routes/rest-api.route";
import soapApiRoute from "./routes/soap-api.route";

const app = express();

app.use(json());

app.use("/rest-api", restApiRoute);
app.use("/soap-api", soapApiRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
