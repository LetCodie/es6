// Arrow function share the same lexical this to parent.

// Expression Body
let arr = [1,2,3]
let mapArr = arr.map( v => v + 1 )
let otherArr = arr.map((v,i) => v * i)
// console.log(mapArr)
console.log(otherArr)

// Statement Body
// arr.forEach( v => {
//   if( v % 2 == 0)
//     // console.log( 'odd' )
//   else {
//     // console.log('even')
//   }
// })

// Lexical this
let radin = {
  name: 'radin',
  age: 27,
  welcome() {
    console.log(`${this.name} loves js.`)
  }
}

radin.welcome()

// Lexical arguments
function square() {
  let example = () => {
    let result = [];
    for(let num of arguments) {
      result.push(num * num)
    }

    return result
  }

  return example();
}


console.log( square(4,5,2) )
