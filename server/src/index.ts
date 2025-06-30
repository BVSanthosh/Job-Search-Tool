import express, { Application } from "express";
import cors from "cors";
import companyRoutes from "./routes/company.route.js";

const app : Application = express();

const port : string | number = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json());

app.use("/api", companyRoutes);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});