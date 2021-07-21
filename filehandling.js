var fs = require("fs");
console.log("Read write operations on files");

const content = "Some content";

//Synchronous file writing

try {
    const data = fs.writeFileSync('input.txt',content,{ flag: 'a+' });
    console.log("Data written successfully");
} catch (err) {
    console.error(err);
}

// //Asynchronous file writing
fs.writeFile('input.txt','Added some text to the file',(err) => {
    if(err){
        return console.error(err);
    }
    console.log("Data written successfully");
});

//Synchronous file reading
try {
    const data = fs.readFileSync('input.txt','utf8');
    console.log(data);
    console.log("Data read successfully");
} catch (err) {
    console.error(err);
}

//Asynchronous file reading
fs.readFile('input.txt',(err,data) => {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});