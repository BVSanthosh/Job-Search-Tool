import { openaiClient } from "../config/openai.js"
import { zodTextFormat } from "openai/helpers/zod";
import { systemPrompt } from "../prompts/company.prompts.js";
import { CompanyInsightsSchema } from "../schemas/company.schemas.js";
import type { CompanyInsights } from "../types/company.types"

export const fetchOpenApiData = async (company_name: string): Promise<CompanyInsights> => {
    const openaiRes = await openaiClient.responses.parse({
        model: "gpt-4o-mini",
        input: [
            { role: "system", content: systemPrompt },
            { role: "user", content: company_name }
        ],
        text: {
            format: zodTextFormat(CompanyInsightsSchema, "output_schema")
        }
    });

    if (!openaiRes.output_parsed) {
        throw new Error("Company data is missing");
    } 

    return openaiRes.output_parsed;
}