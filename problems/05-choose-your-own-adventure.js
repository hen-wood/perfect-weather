/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')


/* `perfectWeather` - Return an array with all cities with perfect weather

Create a function perfectWeather(dataSet, perfectDryDays, perfectRainfall) that takes in climate
data, desired amount of minimum yearly total dry days, and desired amount of minimum yearly total rain fall.
Use the climateData variable as the dataSet argument when testing function with console.log

Return an array of all objects from the data set that meet these conditions. Use this format with exact key names
for the return data:

        {
            city: 'Tokyo',
            country: 'Japan',
            annualDryDays: 212,
            annualRainFall: 1342
        }

***Note: the annualRainFall value should be rounded down to the nearest whole number***

Example:
console.log(perfectWeather(climateData, 280, 400));

returns:
[
  {
    city: 'Athens',
    country: 'Greece',
    annualDryDays: 292,
    annualRainFall: 460
  },
  {
    city: 'Auckland',
    country: 'New Zealand',
    annualDryDays: 280,
    annualRainFall: 437
  },
 ( ...4 other objects )
]

*/


const perfectWeather = (dataSet, perfectDryDays, perfectRainfall) => {
    let perfectWeatherArray = []
    for (let obj of dataSet) {
        let dryDays = obj.monthlyAvg.map(el => el.dryDays).reduce((a, b) => a + b)
        let rainfall = Math.floor(obj.monthlyAvg.map(el => el.rainfall).reduce((a, b) => a + b))

        let newObj = {}
        newObj.city = obj.city
        newObj.country = obj.country
        newObj.annualDryDays = dryDays
        newObj.annualRainFall = rainfall
        if (dryDays >= perfectDryDays && rainfall >= perfectRainfall) {
            perfectWeatherArray.push(newObj)
        }
    }
    return perfectWeatherArray
}
// console.log(perfectWeather(climateData, 280, 400))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [perfectWeather];
