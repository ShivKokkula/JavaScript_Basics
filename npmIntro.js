let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
};
  
// alert(user); // {name: "John", age: 30}
console.log(user);

//////////////////
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
  
let json = JSON.stringify(student);
  
// alert(typeof json); // we've got a string!
console.log(typeof json);
  
// alert(json);
console.log(json);
  /* JSON-encoded object:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "wife": null
  }
  */

  alert( JSON.stringify(1) ) 
  alert( JSON.stringify('test') ) 
//"test"
alert( JSON.stringify(true) ); 
alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
///////////////
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };
  
  alert( JSON.stringify(meetup) );


/////////////////////
$( document ).ready(function() {
	$("#convertCSV").click(function() {
		var csvData = $("#csvData").val();
		var jsonData = CSVToJSON(csvData);
		$("#jsonData").val(jsonData);
	});
});

///////////
<div class="container">
	<h2>Example: Convert CSV to JSON using JavaScript</h2>	
	<div class="form-group">
		<label for="csvData">Paste CSV Data:</label>
		<textarea id="csvData" class="form-control" rows="6"></textarea>
	</div>
	<div class="form-group">
		<label for="jsonData">JSON Data Output:</label>
		<textarea id="jsonData" class="form-control" rows="6"></textarea>
	</div>    
    <button id="convertCSV" class="btn btn-success">Convert to JSON</button>    
</div>
  