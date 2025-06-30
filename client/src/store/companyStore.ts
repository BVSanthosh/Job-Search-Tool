import { create } from "zustand";
import type { CompanyState } from "../types/company.types";

export const useCompanyStore = create<CompanyState>((set) => ({
    companyInfo: {
        company: {
            description: '',
            employeeCount: '',
            founded: '',
            fundingStage: '',
            headquarters: '',
            industry: '',
            name: '',
            revenueEstimate: '',
        },
        cultureAndCareers: {
            hiringRegions: [],
            values: [],
            visaSponsorship: "Unclear",
            workEnvironment: '',
        },
        insightScore: {
            growthPotential: "Medium",
            innovation: "Medium",
            techMaturity: "Intermediate",
            marketPosition: "Challenger",
        },
        keyPeople: {
            ceo: '',
            founders: [],
            notableEmployees: [],
        },
        productsAndServices: {
            coreProducts: [],
            businessModel: '',
            techStack: [],
        },
        recentNews: [],
    },
    jobsInfo: [],
    setCompany: (company) => set((state) => ({
        companyInfo: {
            ...state.companyInfo,
            company: {
                ...state.companyInfo.company,
                ...company.company,
            },
            cultureAndCareers: {
                ...state.companyInfo.cultureAndCareers,
                ...company.cultureAndCareers,
            },
            insightScore: {
                ...state.companyInfo.insightScore,
                ...company.insightScore,
            },
            keyPeople: {
                ...state.companyInfo.keyPeople,
                ...company.keyPeople,
            },
            productsAndServices: {
                ...state.companyInfo.productsAndServices,
                ...company.productsAndServices,
            },
        }
    })),
    setJobs: (jobs) => set(() => ({
        jobsInfo: jobs,
    }))
}))