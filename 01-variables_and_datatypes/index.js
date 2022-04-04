// console.log ->  prints in the browser console 
// console.log(":D")
// debugger -> Adds a breakpoint
// debugger
// console.log("rose")
// debugger
/*
This is a multiline comment 
*/

// var - > do not use
// let -> Can be Reassigned
let cat;
// const -> Can not be Reassigned 
const number = null;
cat = 11;

let weather = 'Raining';

//if...
if(true == true){
 console.log('rose is cute');   
};

if(weather == 'Sunny'){
    console.log('Go outside!');
};

// if... else
if(weather == 'Sunny'){
    console.log('Go outside!');
}else {
    console.log('Stay inside and play Video Games');
}

//else if

// if(weather == 'Sunny'){
//     console.log('Go outside!');
// } else if(weather == 'Raining'){
//     console.log('Bring an umbrella');
// } else {
//     console.log('Stay inside and play Video Games');
// };

//Scope
//global
let fish = 'Sam'
let dog = 'Bubbles';
if(dog == 'Bubbles'){
    console.log(`${dog} is cute`)
    //block scope
    let bird = 'ted'

    if(true == true){
        
        let fish = 'Fred';
        console.log(fish);
    };
    
};
//if(...)              {true.....}                    {else...}
// dog != 'Bubbles'?console.log(`Bubbles is cute`):console.log(`${dog} is cute`)

// switch(weather) {
//     case 'Sunny' : 
//         console.log('go outside!');
//         break;
//     case 'Raining' :
//         console.log('Bring an umbrella');
//         break;
//     case 'Snowing':
//         console.log('Make hot coco');
//         break;
//     default: 
//         console.log('Stay inside and play video games');
//         break;
// };


