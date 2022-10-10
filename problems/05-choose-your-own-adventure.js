/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')


/* `perfectWeather` - Return an array with all cities with perfect weather

Create a function perfectWeather(climateData, perfectDryDays, perfectSnowDays) that takes in climate
data, desired amount of minimum yearly dry days, and desired amount of maximum yearly snow days.
Return an array of all objects from the data set that meet these conditions. Use this format
for the return data:

        {
            city: 'Athens',
            country: 'Greece',
            annualDryDays: 47,
            annualSnowDays: 5
        }

Example:
console.log(perfectWeather(climateData, 320, 1));

^^ returns an array of objects that meets specified argument requirements

*/


const perfectWeather = (climateData, perfectDryDays, perfectSnowDays) => {
    let perfectWeatherArray = []
    for (let obj of climateData) {
        let dryDays = obj.monthlyAvg.map(el => el.dryDays).reduce((a, b) => a + b)
        let snowDays = obj.monthlyAvg.map(el => el.snowDays).reduce((a, b) => a + b)

        let newObj = {}
        newObj.city = obj.city
        newObj.country = obj.country
        newObj.annualDryDays = dryDays
        newObj.annualSnowDays = snowDays
        if (dryDays >= perfectDryDays && snowDays <= perfectSnowDays) {
            perfectWeatherArray.push(newObj)
        }
    }
    return perfectWeatherArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [perfectWeather];
