import type { JobsInfo, Job } from "../types/company.types"

interface JobListingProps {
    jobs: JobsInfo;
}

const JobListing = ({ jobs }: JobListingProps) => {
  return (
    <div>
        <h1 className="font-primary text-secondary font-semibold text-subheader">Job Listing</h1>
        <div className="bg-tertiary rounded-xl p-6">
            <div className="flex flex-col gap-6">
                {jobs.length > 0 ? jobs.map((j: Job) => (
                    <div>
                        <a href={j.link} className="font-semibold">{j.title}</a> 
                        <p className="text-gray-600">{j.snippet}</p> 
                    </div>
                )) : 
                    "Not Available"
                }
            </div>
        </div>
    </div>
  )
}

export default JobListing;