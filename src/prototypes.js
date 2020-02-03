function Hero(name, level) {
    this.name = name;
    this.level = level;
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);

    this.weapon = weapon;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);

    this.spell = spell;
}

// Link prototypes and add prototype methods
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}


// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');


console.log(hero1.greet())
console.log(hero1.attack())
console.log(Warrior.__proto__ === Hero.__proto__)
