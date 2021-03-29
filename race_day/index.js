//race numbers are assigned randomly. 

let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegister = false;

const runnerAge = 18; 

//create a control flow statement that checks whether the runner is an adult and registered early

if(runnerAge > 18 && earlyRegister === true){
    console.log(raceNumber + 1000)
} 
if(runnerAge > 18 && earlyRegister === true){
    console.log(`Your number is ${raceNumber} and your race will begin at 9:30 am.`)
}else if (runnerAge > 18 && earlyRegister === false){
    console.log(`Your number is ${raceNumber} and your race will begin at 11:00 am.`)
}else if(runnerAge < 18){
    console.log(`Hey kiddo! Your number is ${raceNumber} and your race will begin at 12:30. Have fun :)`)
}else(console.log("Please see the registration desk. Thank you!"))
