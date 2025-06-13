import Insights from "../components/Insights";
const Company = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="font-primary text-company font-semibold text-secondary">Company1</h1>
        <div className="w-xl mt-5">
            <Insights />
        </div>
    </div>
  )
}

export default Company;