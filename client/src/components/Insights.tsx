import { useCompanyStore } from "../store/companyStore";
import CompanySummaryCard from "./CompanySummarCard";
import CultureAndCareersCard from "./CultureAndCareersCard";
import InsightScoreCard from "./InsightsScoreCard";
import KeyPeopleCard from "./KeyPeopleCard";
import RecentNewsCard from "./RecentNewsCard";
import JobListing from "./JobListing";

const Insights = () => {
  const company = useCompanyStore((state) => state.companyInfo);
  const jobs = useCompanyStore((state) => state.jobsInfo);

  return (
    <div className="flex flex-col gap-4">
      <CompanySummaryCard companySummary={company.company}/>
      <CultureAndCareersCard cultureAndCareers={company.cultureAndCareers} /> 
      <InsightScoreCard insightScore={company.insightScore} />
      <KeyPeopleCard keyPeople={company.keyPeople} />
      <RecentNewsCard recentNews={company.recentNews} />
      <JobListing jobs={jobs} />
    </div>
  )
}

export default Insights;