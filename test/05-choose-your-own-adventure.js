const { expect } = require('chai');

const [perfectWeather] = require('../problems/05-choose-your-own-adventure.js');

const climateData = require('../climate-data');
describe('perfectWeather()', function () {
    const updated1 = perfectWeather(climateData, 300, 300);
    const updated2 = perfectWeather(climateData, 315, 315)
    const updated3 = perfectWeather(climateData, 280, 400)

    const result1 = [
        {
            city: 'Jerusalem',
            country: 'Israel',
            annualDryDays: 304,
            annualRainFall: 345
        },
        {
            city: 'Los Angeles CA',
            country: 'United States',
            annualDryDays: 303,
            annualRainFall: 329
        },
        {
            city: 'Mexico City',
            country: 'Mexico',
            annualDryDays: 327,
            annualRainFall: 1532
        },
        {
            city: 'Tel Aviv',
            country: 'Israel',
            annualDryDays: 312,
            annualRainFall: 393
        }
    ];

    const result2 = [
        {
            city: 'Mexico City',
            country: 'Mexico',
            annualDryDays: 327,
            annualRainFall: 1532
        }
    ];

    const result3 = [
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
        {
            city: 'Jakarta',
            country: 'Indonesia',
            annualDryDays: 282,
            annualRainFall: 760
        },
        {
            city: 'Mexico City',
            country: 'Mexico',
            annualDryDays: 327,
            annualRainFall: 1532
        },
        {
            city: 'New Delhi',
            country: 'India',
            annualDryDays: 283,
            annualRainFall: 767
        },
        {
            city: 'Sevilla',
            country: 'Spain',
            annualDryDays: 295,
            annualRainFall: 541
        }
    ];


    it("returns an array", function () {
        expect(updated1).to.be.an('array')
        expect(updated2).to.be.an('array')
        expect(updated3).to.be.an('array')
    });

    it("returns an array containing objects", function () {
        expect(updated1).to.have.length.gte(1);
        expect(updated1[0]).to.be.an("object");

        expect(updated2).to.have.length.gte(1);
        expect(updated2[0]).to.be.an("object");

        expect(updated3).to.have.length.gte(1);
        expect(updated3[0]).to.be.an("object");
    });

    it("returns objects with keys of 'city', 'country', 'annualDryDays', and 'annualRainFall'",
        function () {
            expect(updated1[0]).to.haveOwnProperty("city");
            expect(updated1[0]).to.haveOwnProperty("country");
            expect(updated1[0]).to.haveOwnProperty("annualDryDays");
            expect(updated1[0]).to.haveOwnProperty("annualRainFall");

            expect(updated2[0]).to.haveOwnProperty("city");
            expect(updated2[0]).to.haveOwnProperty("country");
            expect(updated2[0]).to.haveOwnProperty("annualDryDays");
            expect(updated2[0]).to.haveOwnProperty("annualRainFall");

            expect(updated3[0]).to.haveOwnProperty("city");
            expect(updated3[0]).to.haveOwnProperty("country");
            expect(updated3[0]).to.haveOwnProperty("annualDryDays");
            expect(updated3[0]).to.haveOwnProperty("annualRainFall");
        });
    it("matches test output data", function () {
        expect(updated1).to.deep.equal(result1)
        expect(updated2).to.deep.equal(result2)
        expect(updated3).to.deep.equal(result3)
    })
})
