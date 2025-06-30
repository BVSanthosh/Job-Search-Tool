import type { Suggestions } from "../types/suggestions.types";
import { useNavigate } from "react-router-dom";

interface ResultsProps {
    suggestions: Suggestions;
}

const Results = ({ suggestions }: ResultsProps) => {
    const navigate = useNavigate();

    const handleClick = (choice: string): void => {
        navigate(`/${choice}`);
    }

    return (
        <div className="mt-10">
            <div className="w-full flex flex-col gap-8 bg-tertiary rounded-xl p-6">
                {suggestions.length == 0 ? (
                    <text>No company found</text>
                ) : (
                    suggestions.map((suggestion) => (
                        <div key={suggestion}>
                            <div className="flex items-center justify-between pb-6">
                                <p>{suggestion}</p>
                                <button className="rounded-full bg-secondary text-white px-3 py-1" onClick={() => handleClick(suggestion)}>Select</button>
                            </div>
                            <hr />
                        </div>
                    ))
                )} 
            </div>
        </div>
    )
}

export default Results;