import { Router } from "express";
import { getSuggestions, getInsights } from "../controllers/company.controller.js";

const router = Router();

router.get("/suggestions/:search", getSuggestions);
router.get("/:company_name", getInsights);

export default router;