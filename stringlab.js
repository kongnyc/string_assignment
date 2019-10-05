// const partA = "David the best"
// console.log(partA[0])

// console.log(partA.length)

// console.log(partA[partA.length-1])


// // console.log(partA.toUpperCase([partA.length-1]))
// console.log(partA.slice(0,partA.length-1)+ partA[partA.length-1].toUpperCase())

// // 5
// let amount = 90000000

// if ( amount >= 1000000){
//     console.log(`${amount} dollars (pinky)`)
//     } else {
//         console.log(`${amount} dollars`)
//     }

// // 6 

// let verb = "too" ;

// if( verb.length > 3 && verb.slice(verb.length-3,verb.length) === 'ing'){
//     console.log(verb + "ly")
// } else if (verb.length > 3 ){
//     console.log(verb + 'ing')
// } else{
//     console.log(verb)
// }

// // 7

// let strSev = 'withoutLast'
// const lost = 'last'

// console.log(strSev.slice(0,strSev.length-lost.length))

// let name1 = "David"
// let name2 = "KONG"

// if (name2.length%2!==0){
//     console.log(name2+"#")
// }
//     else{ 
//         console.log(name2) 
// }


// let i = "AB"
// if (i.length >= 3){
//     console.log(i[i.length-3])
// }
//     else {
//         console.log("Error")
//     }

// let y = "I"
// if (y[0].toUpperCase() === "A" || y[0].toUpperCase() === "E" || y[0].toUpperCase() === "I" || y[0].toUpperCase() === "O" ||y[0].toUpperCase() === "U"){
//     console.log(y[0].toLowerCase()+" is Vowel")
// }
//     else{ (
//         console.log("its not staring vowel")
//     )
// }

// let str1 = "helpss"
// let str2 = "me"

// console.log(
//     str1.slice( 0 , Math.floor( str1.length / 2)) + str2 + str1.slice(Math.floor(str1.length/2))
//     )

//     // 5 extra

let strFive = "dfsdsfghjkl"
let strFiveB = strFive.toUpperCase()


if( (strFiveB.split('A')).length > 1 || (strFiveB.split('E')).length > 1||(strFiveB.split('I')).length > 1||(strFiveB.split('O')).length > 1||(strFiveB.split('U')).length > 1){
    console.log(strFiveB+ " has a vowel")
} else{
    console.log("dont have a vowel")
}

// if(strFiveB.split("a") >= "a" || strFive.split('e')+strFive.toUpperCase() === "E" ||strFive.split('i')+strFive.toUpperCase() === "I" ||strFive.split('o')+strFive.toUpperCase() === "O" ||strFive.split('u')+strFive.toUpperCase() === "U"){
//     console.log(strFive+"has a vowel")
// } else{
//      console.log(strFive + " does not have a vowel")
// }
