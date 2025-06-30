import type { CultureAndCareers } from "../types/company.types";

interface CultureAndCareersCardProps {
    cultureAndCareers: CultureAndCareers
}

const CultureAndCareersCard = ({ cultureAndCareers }: CultureAndCareersCardProps) => {
  return (
    <div>
      <h1 className="font-primary text-secondary font-semibold text-subheader">Culture & Careers</h1>
      <div className="grid grid-cols-2 gap-4 bg-tertiary rounded-xl p-6">
        <div>
          <h1 className="font-semibold">Values</h1>
          {cultureAndCareers.values.length > 0 ? cultureAndCareers.values.map((v: string) => (
            <p key={v}>
              - {v}
            </p>
          )) : 
            "Not Available"
          }
        </div>
        <div>
          <h1 className="font-semibold">Work Environment</h1>
          <p>{cultureAndCareers.workEnvironment}</p>
        </div>
        <div>
          <h1 className="font-semibold">Hiring Regions</h1>
          {cultureAndCareers.hiringRegions.map((r: string) => (
            <p key={r}>
              - {r}
            </p>
          ))}
        </div>
        <div>
          <h1 className="font-semibold">Visa Sponsorship</h1>
          <p>{cultureAndCareers.visaSponsorship}</p>
        </div>
      </div>
    </div>
  )
}

export default CultureAndCareersCard;