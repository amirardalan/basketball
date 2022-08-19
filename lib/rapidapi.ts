import { generateSlug } from '@/utils/generateSlug'

const TEAMS_ENDPOINT = `https://api-basketball.p.rapidapi.com/teams?season=2021-2022&league=12`
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
    'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  }
}

export const getNbaTeams = async () => {
    const res = await fetch(TEAMS_ENDPOINT, options)
    const items = await res.json()

    const data = items.response.map(({ id, logo, name }) => ({
      ["slug"]: generateSlug(name),
      ["id"]: id,
      ["logo"]: logo,
      ["name"]: name
    }))

    console.log(data)
    return data
}

export const getApiRoute = async () => {
  return fetch(TEAMS_ENDPOINT, options)
}