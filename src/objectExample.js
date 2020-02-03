let obj={};

const person = {
    "name": "tharindu",
    age: 24,
    say: function () {
        return `hi ${this.name}`
    }
};



person.tell = function () {
    return `hello`
};

for (let prop in person) {
    console.log(person[prop]);
}
console.log(person);
delete person.tell;

console.log(person);
console.log(Object.keys(person))



