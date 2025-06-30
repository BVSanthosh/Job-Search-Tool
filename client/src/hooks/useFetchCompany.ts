import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '../lib/axios';
import type { CompanyAPIResponse } from '../types/company.types';

const fetchCompanyData = async (companyName : string): Promise<CompanyAPIResponse> => {
    const { data } = await axiosClient.get<CompanyAPIResponse>(`/${companyName}`);
    return data;
}

export const useFetchCompany = (companyName : string) => {
    return useQuery({
        queryKey: ['company', companyName],
        queryFn: () => fetchCompanyData(companyName),
        enabled: false,
    })
}