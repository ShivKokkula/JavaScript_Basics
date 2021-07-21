async function add(a, b) {
    return a + b;
}

add(4,6).then(result => console.log(result));

function f() {
    return Promise.resolve('TEST');
}

async function asyncF() {
    return 'TEST';
}

function f() {
    return Promise.reject("Error");
}

// async function f() {
//     throw "Error"
// }|

const rp = require('request-promise');
const newrp = rp('http://example.com/')

newrp.then(data => console.log("print fetched data")).catch(console.log("Error occured"));


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

const call1Promise = rp('http://example.com/');

call1Promise.then(data => {
    console.log("data fetched sucessfully");
    const call2Promise = rp('http://example2.com/');
    const call3Promise = rp('http://example3.com/');
    return Promise.all([call2Promise,call3Promise])
}).then(data2 => {
    console.log(data2[0]);
    console.log(data2[1]);
});


async function f(){
    // response will evaluate as the resolved value of the promise
    const response = await rp('http://example.com/');
    console.log(response);
}
async function f(){
    const response = await rp('http://example.com/');
    console.log(response);
}

/////////////////////////////////////
async function solution() {
    // Wait for the first HTTP call and print the result
    console.log(await rp('http://example.com/'));

    // Spawn the HTTP calls without waiting for them - run them concurrently
    const call2Promise = rp('http://example.com/');  // Does not wait!
    const call3Promise = rp('http://example.com/');  // Does not wait!

    // After they are both spawn - wait for both of them
    const response2 = await call2Promise;
    const response3 = await call3Promise;
}

///////////////
async function f() {
    try {
        const promiseResult = await Promise.reject('Error');
    } catch (e){
        console.log(e);
    }
}
