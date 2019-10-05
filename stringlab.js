const partA = "David the best"
console.log(partA[0])

console.log(partA.length)

console.log(partA[partA.length-1])


// console.log(partA.toUpperCase([partA.length-1]))
console.log(partA.slice(0,partA.length-1)+ partA[partA.length-1].toUpperCase())

// 5
let amount = 90000000

if ( amount >= 1000000){
    console.log(`${amount} dollars (pinky)`)
    } else {
        console.log(`${amount} dollars`)
    }

// 6 

let verb = "too" ;

if( verb.length > 3 && verb.slice(verb.length-3,verb.length) === 'ing'){
    console.log(verb + "ly")
} else if (verb.length > 3 ){
    console.log(verb + 'ing')
} else{
    console.log(verb)
}

// 7

let strSev = 'withoutLast'
const lost = 'last'

console.log(strSev.slice(0,strSev.length-lost.length))

