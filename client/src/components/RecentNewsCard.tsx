import type { RecentNews } from "../types/company.types";

interface RecentNewsCardProps {
    recentNews: RecentNews;
}

const RecentNewsCard = ({ recentNews }: RecentNewsCardProps) => {
  return (
    <div>
        <h1 className="font-primary text-secondary font-semibold text-subheader">Recent News</h1>
        <div className="bg-tertiary rounded-xl p-6">
            {recentNews.length > 0 ? recentNews.map((n) => (
                <>
                    <div>
                        <h1 className="font-semibold">{n.title}</h1>
                        <p>{n.date}</p>
                        <p>{n.summary}</p>
                        <a>{n.source}</a>
                    </div>
                </>
            )) : 
                "Not Available"
            }
        </div>
    </div>
  ) 
}

export default RecentNewsCard;