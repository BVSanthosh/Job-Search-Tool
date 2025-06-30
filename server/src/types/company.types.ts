interface SuggestionsParams {
  search: string;
}

interface InsightsParam{
  company_name: string;
}

interface ScrapedResult {
  title: string;
  link: string;
  snippet: string;
}

type ScrapedResults = ScrapedResult[];

interface CompanyInsights {
  company: {
    name: string;
    description: string;
    industry: string;
    founded: string | null;
    headquarters: string;
    employeeCount: string;
    fundingStage: string;
    revenueEstimate: string | null;
  };

  productsAndServices: {
    coreProducts: string[];
    businessModel: string;
    techStack: string[];
  };

  cultureAndCareers: {
    workEnvironment: string;
    values: string[];
    hiringRegions: string[];
    visaSponsorship: "Yes" | "No" | "Unclear";
  };

  keyPeople: {
    founders: string[];
    ceo: string;
    notableEmployees: string[];
  };

  recentNews: {
    title: string;
    date: string;
    summary: string;
    source: string;
  }[];

  insightScore: {
    innovation: "High" | "Medium" | "Low";
    growthPotential: "High" | "Medium" | "Low";
    techMaturity: "Advanced" | "Intermediate" | "Early-stage";
    marketPosition: "Leader" | "Challenger" | "Niche" | "Emerging";
  };
}

interface ErrorResponse {
  error: string;
}

interface Insights {
  companyInfo: CompanyInsights;
  jobsInfo: ScrapedResults;
}

type InsightsResponse = Insights | ErrorResponse;

type SuggestionsResponse = string[] | ErrorResponse;

export { InsightsParam, ScrapedResult, CompanyInsights, ScrapedResults, ErrorResponse, InsightsResponse, SuggestionsParams, SuggestionsResponse };