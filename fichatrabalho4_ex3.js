function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName + "Age: " + this.age);
}

var john = new Person ("Xoao","Andre");
john.age = 24;
john.greet();

var jane = new Person("Xoana","Teixeira");
jane.age = 26;
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ == jane.__proto__);