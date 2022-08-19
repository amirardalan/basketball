import { NextApiRequest, NextApiResponse } from 'next'
import { getApiRoute } from '@/lib/rapidapi'
import { generateSlug } from '@/utils/generateSlug'


export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getApiRoute()
  const items = await response.json()

  const data = items.response.map(({ id, logo, name }) => ({
    ["slug"]: generateSlug(name),
    ["id"]: id,
    ["logo"]: logo,
    ["name"]: name
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json(data)
}