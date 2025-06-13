import { Router } from "express";
import { getInsights } from "../controllers/search.controller";

const router = Router();

router.get("/:name", getInsights);

export default router;