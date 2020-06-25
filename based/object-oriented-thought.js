var Car = function(loc) {
  var obj = {loc: loc}
  obj.move = function() {
    obj.loc ++;
  }
  return obj;
}

var policeCar = new Car(9)

//decorator function
var carlike = function(obj, loc) {
  obj.loc = loc
  obj.move = function () {
    this.loc ++ ;
  }
  return obj;
}
var amy = carlike({},1);
amy.move()
var ben = carlike({}, 9)
ben.move()


//archetype pattern
var Car = function(loc) {
  //inherit archetype
  var obj = Object.create(Car.prototype)
  obj.loc = loc;
  return obj;
}
Car.prototype.move = function () {
  this.loc++;
}

var amy = Car(9);
amy.move()


//pseudo class pattern
var Car = function(loc) {
  this.loc = loc;
}
Car.prototype.move = function() {
  this.loc++;
}
var amy = new Car(1)
amy.move()
var ben = new Car(9)
ben.move()


//superclass and subclass
var Car = function(loc) {
  var obj = { loc: loc }
  obj.move = function () {
    obj.loc++;
  }
  return obj
}

var Van = function (loc) {
  var obj = Car(loc);
  obj.grab = function() {

  }
  return obj;
}

var Cop = function (loc) {
  var obj = Car(loc);
  obj.call = function(){}
  return obj
}