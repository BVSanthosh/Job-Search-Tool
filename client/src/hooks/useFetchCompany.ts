import { useQuery } from '@tanstack/react-query';
import { client } from '../lib/axios';
import type { Company } from '../types/company.types';

const fetchCompanyData = async (companyName : string): Promise<Company> => {
    const { data } = await client.get<Company>(`/${companyName}`);
    return data;
}

export const useFetchCompany = (companyName : string) => {
    return useQuery({
        queryKey: ['company', companyName],
        queryFn: () => fetchCompanyData(companyName),
        enabled: false,
    })
}