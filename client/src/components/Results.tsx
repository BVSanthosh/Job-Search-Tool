import { useCompanyStore } from '../store/companyStore';

const Results = () => {
    const company = useCompanyStore((state) => state.company);

    return (
        <div className="mt-10">
            <div className="w-full flex flex-col gap-8 bg-tertiary rounded-xl p-6">
                {company && (
                    <>
                        <div className="flex items-center justify-between">
                            <text>{company.name}</text>
                            <text>{company.description}</text>
                            <button className="rounded-full bg-secondary text-white px-3 py-1">Select</button>
                        </div>
                        <hr />
                    </>
                )}
            </div>
        </div>
    )
}

export default Results;