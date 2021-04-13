var person = {
    name:"John",
    age:50,
    gender:"masculine"
};
var converte_json = JSON.stringify(person);
console.log(converte_json)


var personObj = JSON.parse('{ "name":"John", "age":30, "gender":"masculine"}');

console.log(personObj)
