import express, { json } from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.listen(3333, () => console.log("SERVER IS RUNNING!"));
