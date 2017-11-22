//hoisting

console.log(bar)

var bar = 'my bar'
//===================

foo()

function foo() {
  console.log('my foo')
}

//===================
bar()

const bar = () => {
  console.log('my bar')
}

//===================

function foo() {
  bar()

  function bar() {
    console.log('my bar')
  }
}

foo()
