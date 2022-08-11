import { NextApiRequest, NextApiResponse } from 'next'
import { getNbaData } from '@/lib/rapidapi'


// export default async function handler(_: NextApiRequest, res: NextApiResponse) {
//   const response = await getNbaData()
//   const items = await response.json()

//   const data = items.assets.map(({ }) => ({
//     ["id"]: id,
//   }))

//   // res.setHeader(
//   //   'Cache-Control',
//   //   'public, s-maxage=86400, stale-while-revalidate=43200'
//   // )

//   return res.status(200).json(data)
// }