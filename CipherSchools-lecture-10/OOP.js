/* object is a unique entity that contains some properties and methods.
 It can be created in two ways:
object literals and object constructor*/

// Creating an object with object literal
let person = {
    firstname: "Rahul",
    lastname: "Singh",

    getfullname: function () {
        return `The name of the person is ${person.firstname} ${person.lastname}`;
    },

    phonenumber: {
        mobile: "123",
        landline: "12345",
    },
};
console.log(person.getfullname());
console.log(person.phonenumber)

// creating object with object constructor
function newperson(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

}
let person1 = new newperson("Rahul", "Ring");
console.log(person1);

//creating object with the help of object.create method
const coder = {
    isStudying: false,
    printintro: function () {
        console.log(`my name is ${this.name}`);
    }
};
const me = Object.create(coder);

/*Class in javascript */
//classes are blueprint of an object(JS does not have classes but have prototype objects)
class vehical {
    constructor(name, maker, engine) {
        this.name = name
        this.maker = maker
        this.engine = engine
    }
    getDetails() {
        return `the name of the vehical is ${this.name}`
    }

}
let vehical1 = new vehical("Hector", "MG", "V12");
console.log(vehical1.getDetails());

//Abstraction: displaying only essential information and hiding the details
//encapsulation:The process of wrapping properties and functions into a single unit.
//polymorphism: to represent the data in multiple form. Achieved by function overloading and overriding.