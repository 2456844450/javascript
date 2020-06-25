//原型式继承
function func(param) {
  function A() {

  }
  A.prototype = param
  return new A()
}

let b = func({ name: 'mulan', age: 24 })
console.log(b.name, b.age)


//构造函数式继承
function A() {
  this.name = 'mulan'
}

function B () {
  A.call(this);
  this.age = '24'
}

let b = new B()

//组合式继承
function A() {
  this.name = 'mulan'
}
A.prototype.sayName = function() {
  console.log(this.name)
}
function B() {
  A.call(this)
}
B.prototype = new A()
B.prototype.constructor = B
