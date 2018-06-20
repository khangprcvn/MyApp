function PersonType(name) {
    this.name = name;
}
PersonType.create = function(name) {
    return new PersonType(name);
};
PersonType.prototype.sayName = function() {
    console.log(this.name);
}
// var name = new PersonType.create("Khang");
// name.sayName();

class PersonType2 {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
    static create(name) {
        return new PersonType2(name);
    }
}
let person = PersonType2.create("Viet");
person.sayName();
let person2 = new PersonType2("Do");
person2.sayName(); 