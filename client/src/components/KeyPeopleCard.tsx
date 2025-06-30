import type { KeyPeople } from "../types/company.types"

interface KeyPeopleCardProps {
    keyPeople: KeyPeople;
}

const KeyPeopleCard = ({ keyPeople }: KeyPeopleCardProps) => {
  return (
    <div>
        <h1 className="font-primary text-secondary font-semibold text-subheader">Key People</h1>
        <div className="bg-tertiary rounded-xl p-6 grid grid-cols-2 gap-4">
            <div>
              <h1 className="font-semibold">CEO</h1>
              <p>{keyPeople.ceo}</p>
            </div>
            <div>
              <h1 className="font-semibold">Founders</h1>
              {keyPeople.founders.map((f: string) => (
                  <p key={f}>
                  - {f}
                  </p>
              ))}
            </div>
            <div>
              <h1 className="font-semibold">Notable Employees</h1>
              <p>{keyPeople.notableEmployees}</p>
            </div>
        </div>
    </div>
  )
}

export default KeyPeopleCard