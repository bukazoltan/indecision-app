"use strict";

var add = function add(a, b) {
  return a + b;
};

console.log(add(55, 1));

var user = {
  name: 'Andrew',
  cities: ["Budapest", "New York", "Dublin"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  numbers: [12, 20, 100],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
