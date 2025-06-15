import { create } from "zustand";
import type { Company } from "../types/company.types";

interface CompanyState {
    company: Company;
    setCompany: (company : Partial<Company>) => void;
}

export const useCompanyStore = create<CompanyState>((set) => ({
    company: {
        name: '',
        description: '',
    },
    setCompany: (company) => set((state) => ({
        company: {
            ...state.company,
            ...company,
        }
    }))
}))