export const getNbaData = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
  };
  
  fetch('https://api-basketball.p.rapidapi.com/timezone', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}