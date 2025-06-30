import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../lib/axios";
import type { Suggestions } from "../types/suggestions.types";

const fetchSuggestions = async (search: string): Promise<Suggestions> => {
    const { data } = await axiosClient.get<Suggestions>(`/suggestions/${search}`);
    return data; 
}

export const useFetchSuggestions = (search: string) => {
    return useQuery({
        queryKey: ['suggestions', search],
        queryFn: () => fetchSuggestions(search),
        enabled: false,
    })
}