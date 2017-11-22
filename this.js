// //this

// bar = 'barf'

// const myObj = {
//   bar: 'cart',
//   foo: foo
// }

// function foo() {
//   console.log(this.bar)
// }

// foo()

// myObj.foo()
bar = 'my bar'

function foo() {
  console.log(this.bar)
}

const yourObj = {
  bar: 'your bar'
}

const myBar = foo.bind(yourObj)

myBar()
