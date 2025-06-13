import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import searchRoutes from "./routes/search.route";

dotenv.config();
const app : Application = express();

const port : string | undefined = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", searchRoutes);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
