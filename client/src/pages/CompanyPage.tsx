import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Insights from "../components/Insights";
import { useFetchCompany } from '../hooks/useFetchCompany';
import { useCompanyStore } from '../store/companyStore';

const Company = () => {
  const { companyName: name } = useParams();
  const setCompany = useCompanyStore((state) => state.setCompany);
  const setJobs = useCompanyStore((state) => state.setJobs);
  const { refetch, isFetching, isError, data } = useFetchCompany(name || "");

  useEffect(() => {
    const getInsights = async () => {
      const result = await refetch();

      if (result.data) {
        setCompany(result.data.companyInfo);
        setJobs(result.data.jobsInfo);
      }
    }

    if (name) {
      getInsights();
    }
  }, [refetch, name, setCompany, setJobs]);

  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="font-primary text-company font-bold text-secondary mb-5">
          {data == null ? "Company" : data.companyInfo.company.name}
        </h1>
        <div className="w-xl">
          {isFetching && <p>Searching...</p>}
          {isError && <p>No Results Found.</p>}
          {data && <Insights />}
        </div>
    </div>
  )
}

export default Company;