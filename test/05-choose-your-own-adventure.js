const { expect } = require('chai');

const [perfectWeather] = require('../problems/05-choose-your-own-adventure.js');

const climateData = require('../climate-data');
describe('temperatureRange()', function () {
    const updated1 = perfectWeather(climateData, 320, 1);
    const updated2 = perfectWeather(climateData, 340, 0)

    const result1 = [
        {
            city: 'Dubai',
            country: 'United Arab Emirates',
            annualDryDays: 344,
            annualSnowDays: 0
        },
        {
            city: 'Halifax',
            country: 'Canada',
            annualDryDays: 322,
            annualSnowDays: 0
        },
        {
            city: 'Mexico City',
            country: 'Mexico',
            annualDryDays: 327,
            annualSnowDays: 0
        },
        {
            city: 'Rio de Janeiro',
            country: 'Brazil',
            annualDryDays: 326,
            annualSnowDays: 0
        },
        {
            city: 'Taghazout',
            country: 'Morocco',
            annualDryDays: 333,
            annualSnowDays: 0
        }
    ];
    const result2 = [
        {
            city: 'Dubai',
            country: 'United Arab Emirates',
            annualDryDays: 344,
            annualSnowDays: 0
        }
    ];


    it("returns an array", function () {
        expect(updated1).to.be.an('array')

        expect(updated2).to.be.an('array')
    });

    it("returns an array containing objects", function () {
        expect(updated1).to.have.length.gte(1);
        expect(updated1[0]).to.be.an("object");

        expect(updated2).to.have.length.gte(1);
        expect(updated2[0]).to.be.an("object");
    });

    it("returns objects with keys of 'id', 'city', 'country', and 'monthlyTemperatureRange'",
        function () {
            expect(updated1[0]).to.haveOwnProperty("city");
            expect(updated1[0]).to.haveOwnProperty("country");
            expect(updated1[0]).to.haveOwnProperty("annualDryDays");
            expect(updated1[0]).to.haveOwnProperty("annualSnowDays");

            expect(updated2[0]).to.haveOwnProperty("city");
            expect(updated2[0]).to.haveOwnProperty("country");
            expect(updated2[0]).to.haveOwnProperty("annualDryDays");
            expect(updated2[0]).to.haveOwnProperty("annualSnowDays");
        });
    it("matches test output data", function () {
        expect(updated1).to.deep.equal(result1)
        expect(updated2).to.deep.equal(result2)
    })
})
