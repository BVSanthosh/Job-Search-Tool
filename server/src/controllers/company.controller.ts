import { Request, Response } from "express";
import type { InsightsParam, InsightsResponse, SuggestionsParams, SuggestionsResponse } from "../types/company.types";
import { CompanySearchResponseSchema } from "../schemas/company.schemas.js";
import { fetchCompanyHouseData } from "../utils/companyHouseAPI.js";
import { fetchOpenApiData } from "../utils/openaiAPI.js";
import { fetchSerpApiData } from "../utils/serpAPI.js";

export const getSuggestions = async (req: Request<SuggestionsParams>, res: Response<SuggestionsResponse>): Promise<void> => {
    try {
        const { search } = req.params;

        if (!search) {
            res.status(400).json({ error: 'Company name not provided.' });
            return;
        }

        if (!process.env.COMPANIES_HOUSE_API_KEY) {
            res.status(400).json({ error: 'Company name not provided.' });
            return;
        }

        const credentials: string = `${process.env.COMPANIES_HOUSE_API_KEY}:`;
        const basic64encoded: string = Buffer.from(credentials).toString('base64');
        const companyHouseRes = await fetchCompanyHouseData(search, basic64encoded);

        if (!companyHouseRes.ok) {
            res.status(companyHouseRes.status).json({ error: 'Companies House API error' });
            return;
        }

        const jsonData = await companyHouseRes.json();
        const data = CompanySearchResponseSchema.parse(jsonData);
        const filteredData = data.items.map(item => item.title);

        res.status(200).json(filteredData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to retrieve suggestions"
        });  
    }
}

export const getInsights = async (req: Request<InsightsParam>, res: Response<InsightsResponse>): Promise<void> => {
    try {
        const { company_name } = req.params;

        if (!company_name) {
            res.status(400).json({ error: 'Company name not provided' });
            return;
        }

        const companyInfo = await fetchOpenApiData(company_name);
        const jobsInfo = await fetchSerpApiData(company_name);

        const responsePayload: InsightsResponse = {
            companyInfo: companyInfo,
            jobsInfo: jobsInfo,
        };

        res.status(200).json(responsePayload);
    } catch(error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to retrieve insights"
        });
    }
}