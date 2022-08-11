export const getNbaData = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
  }
  
  fetch('https://api-basketball.p.rapidapi.com/teams?season=2019-2020&league=12', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}