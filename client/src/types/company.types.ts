interface Company {
    description: string;
    employeeCount: string;
    founded: string | null;
    fundingStage: string;
    headquarters: string;
    industry: string;
    name: string;
    revenueEstimate: string | null;
}

interface CultureAndCareers {
    hiringRegions: string[];
    values: string[];
    visaSponsorship: "Yes" | "No" | "Unclear";
    workEnvironment: string;
}

interface InsightScore {
    growthPotential: "High" | "Medium" | "Low"; 
    innovation: "High" | "Medium" | "Low"; 
    techMaturity: "Advanced" | "Intermediate" | "Early-stage";
    marketPosition: "Leader" | "Challenger" | "Niche" | "Emerging";
}

interface KeyPeople {
    ceo: string;
    founders: string[];
    notableEmployees: string[];
}

interface News {
    title: string;
    date: string;
    summary: string;
    source: string;
}

type RecentNews = News[]

interface ProductsAndServices {
    coreProducts: string[];
    businessModel: string;
    techStack: string[];
}

interface CompanyInfo {
    company: Company;
    cultureAndCareers: CultureAndCareers;
    insightScore: InsightScore;
    keyPeople: KeyPeople;
    productsAndServices: ProductsAndServices;
    recentNews: RecentNews
}

interface Job {
    title: string;
    snippet: string;
    link: string;
}

type JobsInfo = Job[];

interface CompanyAPIResponse {
    companyInfo: CompanyInfo;
    jobsInfo: JobsInfo;
}

interface CompanyState {
    companyInfo: CompanyInfo;
    jobsInfo: JobsInfo;
    setCompany: (company : Partial<CompanyInfo>) => void;
    setJobs: (jobs : JobsInfo) => void;
}

export type { Company, CultureAndCareers, ProductsAndServices, InsightScore, KeyPeople, RecentNews, JobsInfo, Job, CompanyInfo, CompanyState, CompanyAPIResponse };