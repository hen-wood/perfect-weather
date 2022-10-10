# Find Perfect Weather

Find all the cities in the climate-data.js data set (reference with ``climateData`` as an argument)
that have "Perfect Weather" based on minimum total dry days and minimum total rainfall.

This is a single problem that requires returning an array of objects with specified data.
I also made a test file to run, so use command `npm install` to run the mocha test.

```javascript
// climate-data.js file
const climateData = [   // array of 105 objects, each representing a city
  {
    "id": 1,
    "city": "Amsterdam",
    "country": "Netherlands",
    "monthlyAvg": [     // nested array with average monthly data for that city
      {                     // climateData[0].monthlyAvg[0] = January data
        "high": 7,
        "low": 3,
        "dryDays": 19,
        "snowDays": 4,
        "rainfall": 68
      },
      {                     // climateData[0].monthlyAvg[1] = February data
        "high": 6,
        "low": 3,
        "dryDays": 13,
        "snowDays": 2,
        "rainfall": 47
      },
      {                     // climateData[0].monthlyAvg[2] = March data
        "high": 10,
        "low": 6,
        "dryDays": 16,
        "snowDays": 1,
        "rainfall": 65
      },
      {                     // climateData[0].monthlyAvg[3] = April data
        "high": 11,
        "low": 7,
        "dryDays": 12,
        "snowDays": 0,
        "rainfall": 52
      },
      {                     // climateData[0].monthlyAvg[4] = May data
        "high": 16,
        "low": 11,
        "dryDays": 15,
        "snowDays": 0,
        "rainfall": 59
      },
      {                     // climateData[0].monthlyAvg[5] = June data
        "high": 17,
        "low": 11,
        "dryDays": 14,
        "snowDays": 0,
        "rainfall": 70
      },
      {                     // climateData[0].monthlyAvg[6] = July data
        "high": 20,
        "low": 12,
        "dryDays": 14,
        "snowDays": 0,
        "rainfall": 74
      },
      {                     // climateData[0].monthlyAvg[7] = August data
        "high": 20,
        "low": 12,
        "dryDays": 15,
        "snowDays": 0,
        "rainfall": 69
      },
      {                     // climateData[0].monthlyAvg[8] = September data
        "high": 17,
        "low": 10,
        "dryDays": 14,
        "snowDays": 0,
        "rainfall": 64
      },
      {                     // climateData[0].monthlyAvg[9] = October data
        "high": 14,
        "low": 9,
        "dryDays": 16,
        "snowDays": 0,
        "rainfall": 70
      },
      {                    // climateData[0].monthlyAvg[10] = November data
        "high": 9,
        "low": 6,
        "dryDays": 20,
        "snowDays": 1,
        "rainfall": 82
      },
      {                     // climateData[0].monthlyAvg[11] = December data
        "high": 7,
        "low": 1,
        "dryDays": 19,
        "snowDays": 1,
        "rainfall": 85
      }
    ]
  },
  // ...followed by 104 other objects with data for additional cities
];
```

Some notes about the data:

- `high`' and `low` temperatures are the monthly average temperature, measured in degrees Celsius (c).
- `rainfall` is the average total rainfall for the entire month, measured in millimeters (mm).
- Each `monthlyAvg` array includes an object for each month, but they are not labeled by month names. To access data for a specific month, use the month's number (1 - 12) and subtract 1 to get the index in the array. For example:
    - `monthlyAvg[0]` will access January data
    - `monthlyAvg[11]` will access December data

You will need to use many of the POJO methods and advanced array methods that
you have already learned to complete each task.

## Phase 0: Setup

To get started, use the following commands:

1. Clone the starter repository
2. `cd` into the project directory
3. `npm install` to install dependencies

The `mocha` command will run all the tests. You should have `mocha` installed
and will need to pass all the tests in order to move on.

To test only one of the test files at a time, you can run the command, `mocha
test/<test file name>` (e.g. `mocha test/01-clean-climate-data.js`),
where `test` is the name of the test folder. You must run this command one
directory above the `test` directory.

_You may notice the `package.json`/`package-lock.json` files and
`node_modules` directory. You do not need to edit any of those contents. Those
files are what we use to package the project and create the test cases._
