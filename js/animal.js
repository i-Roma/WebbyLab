function Animal(name) {
  this.name = name;
};

Animal.prototype.getName = function(name) {
  console.log(this.name);
  return this.name;
};

function Dog(name) {
  Animal.apply(this, arguments);
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(name) {
  console.log('Dog ' + this.name + ' is barking');
  return this.name; 
};

var dog = new Dog('Aban');

console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Aban');