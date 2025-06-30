import type { Company } from "../types/company.types"

interface CompanySummaryCardProps {
    companySummary: Company; 
}
 
const CompanySummaryCard = ({ companySummary }: CompanySummaryCardProps) => {
  return (
    <div>
        <h1 className="font-primary text-secondary font-semibold text-subheader">Company Summary</h1>
        <div className="bg-tertiary rounded-xl p-6">
            <div className="mb-4">
                <h1 className="font-semibold">Description</h1>
                <p>{companySummary.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h1 className="font-semibold">Founded</h1>
                    <p>{companySummary.founded != null ? companySummary.founded : "Not available"}</p>
                </div>
                <div>
                    <h1 className="font-semibold">Headquarters</h1>
                    <p>{companySummary.headquarters}</p>
                </div>
                <div>
                    <h1 className="font-semibold">Employee Count</h1>
                    <p>{companySummary.employeeCount}</p>
                </div>
                <div>
                    <h1 className="font-semibold">Industry</h1>
                    <p>{companySummary.industry}</p>
                </div>
                <div>
                    <h1 className="font-semibold">Funding Stage</h1>
                    <p>{companySummary.fundingStage}</p>
                </div>
                <div>
                    <h1 className="font-semibold">Revenue Estimation</h1>
                    <p>{companySummary.revenueEstimate != null ? companySummary.revenueEstimate : "Not available"}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanySummaryCard;