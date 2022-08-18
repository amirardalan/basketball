// import { generateSlug } from '@/utils/generateSlug'

const RAPID_API_ENDPOINT = `https://api-basketball.p.rapidapi.com/teams?season=2021-2022&league=12`
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
    'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  }
}

export const getNbaTeams = async () => {

    const res = await fetch(RAPID_API_ENDPOINT, options)
    // const items = await res.json()

    // const data = items.assets.map(({ id, image_url, animation_url, name, description, permalink, collection, num_sales }) => ({
    //   ["slug"]: generateSlug(name),
    //   ["id"]: id,
    //   ["image_url"]: image_url,
    //   ["animation_url"]: animation_url,
    //   ["name"]: name,
    //   ["description"]: description,
    //   ["permalink"]: permalink,
    //   ["collection"]: collection.name,
    //   ["created_date"]: collection.created_date,
    //   ["num_sales"]: num_sales
    // }))
    
    const data = res.json()

    return data
}

export const getApiRoute = async () => {
  return fetch(RAPID_API_ENDPOINT, options)
}