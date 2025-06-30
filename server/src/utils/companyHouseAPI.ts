import fetch from "node-fetch"

export const fetchCompanyHouseData = async (search: string, basic64encoded: string) => {
    const chRes = await fetch(`https://api.company-information.service.gov.uk/search/companies?q=${search}`, {
        method: "GET",
        headers: {
            "Authorization": `Basic ${basic64encoded}`,
        },
    });

    return chRes;
}