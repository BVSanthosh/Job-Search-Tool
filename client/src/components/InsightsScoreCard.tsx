import type { InsightScore } from "../types/company.types"

interface InsightScoreCardProps {
    insightScore: InsightScore;
}

const InsightScoreCard = ({ insightScore }: InsightScoreCardProps) => {
  return (
    <div>
        <h1 className="font-primary text-secondary font-semibold text-subheader">Insight Score</h1>
        <div className="bg-tertiary rounded-xl p-6 grid grid-cols-2 gap-4 ">
          <div>
            <h1 className="font-semibold">Growth Potential</h1>
            <p>{insightScore.growthPotential}</p>
          </div>
          <div>
            <h1 className="font-semibold">Innovation</h1>
            <p>{insightScore.innovation}</p>
          </div>
          <div>
            <h1 className="font-semibold">Market Position</h1>
            <p>{insightScore.marketPosition}</p>
          </div>
          <div>
            <h1 className="font-semibold">Tech Maturity</h1>
            <p>{insightScore.techMaturity}</p>
          </div>
        </div>
    </div>
  )
}

export default InsightScoreCard;