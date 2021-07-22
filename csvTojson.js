const CSVToJSON = require('csvtojson');
var fs = require("fs");

CSVToJSON().fromFile('users.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        console.log(users);
    }).catch(err => {
        // log error if any
        console.log(err);
});

// Write JSON array to a file
let users = [
    {
      id: '100',
      name: 'Atta Shah',
      email: 'atta@example.com',
      country: 'PK',
      age: '30'
    },
    {
      id: '101',
      name: 'Alex Jones',
      email: 'alex@example.com',
      country: 'DE',
      age: '35'
    },
    {
      id: '102',
      name: 'Jovan Lee',
      email: 'jovan@example.com',
      country: 'FR',
    },
    {
      id: '103',
      name: 'Greg Hover',
      email: 'greg@example.com',
      country: 'US',
      age: '45'
    }
  ]
fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON array is saved.");
});

// The csvtojson module also supports the async-await syntax.
(async () => {
    try {
        const users = await CSVToJSON().fromFile('users.csv');

        // log the JSON array
        console.log(users);

    } catch (err) {
        console.log(err);
    }
})();