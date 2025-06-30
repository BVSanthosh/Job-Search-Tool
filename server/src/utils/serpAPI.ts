import { getJson } from "serpapi";
import type { ScrapedResult, ScrapedResults } from "../types/company.types";

export const fetchSerpApiData = async (company_name: string) => {
    const serpapiRes = await getJson("google", {
        api_key: process.env.SERPAPI_KEY,
        q: `Graduate Software Engineer ${company_name} UK`,
        location: "United Kingdom"
    });

    const scrappedData = serpapiRes.organic_results || [];

    const filteredResults: ScrapedResults = scrappedData.map((result: ScrapedResult) => ({
        title: result.title,
        link: result.link,
        snippet: result.snippet
    }));

    return filteredResults;
}