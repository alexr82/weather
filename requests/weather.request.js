const axios = require('axios').default;

module.exports = async function (city='') {
    try {
        if(!city){
            throw new Error('Name cant be empty')
        }
        
        const KEY = '28ea3f86f57d278ac54a5e0b2dd5d8c5'
        const options = {
            params: {
                appid: KEY,
                q: city,
                units: 'imperial'
            }
        }
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',options);
        const celcius = ((response.data.main.temp-32)*5/9).toFixed(0)
        return {
            weather: `${celcius}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error
        }
    }
  }