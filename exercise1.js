// Exercise 1: Inheritance, Super, and Private Properties
// 
// 1. Create a class `Vehicle` with private properties `#make`, `#model`, and `#year`.
// 2. The `Vehicle` class should have a method `getInfo` that returns a string with the vehicle’s details.
// 3. Create a subclass `Car` that inherits from `Vehicle`. Add a new private property `#doors`.
// 4. In the `Car` class, use the `super` keyword to call the parent constructor.
// 5. Override the `getInfo` method in the `Car` class to include the number of doors in the string.


class Vehicle {
  // YOUR CODE HERE
}

class Car extends Vehicle {
  // YOUR CODE HERE
}


// Test Code / Driver Code
const myCar = new Car("Toyota", "Corolla", 2021, 4);
console.log(myCar.getInfo());  // Expected Output: "2021 Toyota Corolla with 4 doors"