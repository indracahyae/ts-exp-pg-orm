import express, { Request, Response } from "express";
import productsRoutes from "./routes/ProductsRoutes";
import dataSource from "../ormconfig";

const app = express();
const port = process.env.PORT;

// connection with database
dataSource
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

// route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world, TypeScript Express Typeorm postgreSql!");
});
app.use("/api/products", productsRoutes);

//   start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
