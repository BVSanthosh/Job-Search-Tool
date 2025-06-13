
const Results = () => {
    const res : string[] = ["company1", "company2", "company3"];

    return (
    <div className="mt-10">
        <div className="w-full flex flex-col gap-8 bg-tertiary rounded-xl p-6">
            {res.map((comp) => (
                <>
                    <div className="flex items-center justify-between">
                    <text>{comp}</text>
                    <button className="rounded-full bg-secondary text-white px-3 py-1">Select</button>
                    </div>
                    <hr />
                </>
            ))}
        </div>
    </div>
    )
}

export default Results;