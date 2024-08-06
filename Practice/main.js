// Global Execution Context

/*
    Lexical environment = {
        environmentRecord: { x: 10 }
        outer: null
    }

*/

let x = 10

function myFn() {
    /*
    Lexical environment = {
        environmentRecord: { n: 5 },
        outer: [Lexical environment of GEC]
    }
    */
    let n = 5

    function innerFunction() {
        /*
            Lexical environment = {
                environmentRecord: { a: 20 }
                outer: [Lexical environment of myFn then GEC]
            }
        */
        let a = 20
    }
}

function counter() {
     /*
       Lexical environment = {
           environmentRecord: { x: 0 }
           outer: [reference to outer lexical environment]
       }
     */
    let count = 0
    return function () {
        return ++count
    }
}

let myCounter = counter()

console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())