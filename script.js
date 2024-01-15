// N1

let num = 100;

if (num < 50) {
    console.log( "less than 50")
}
else if (num > 20) {
    console.log( "more than 20")
}
else {
    console.log( "Error")
}

// N2

let firstName = "Mariam";

let result = firstName=="Mariam" ? 'true' : 'false';

console.log(result);

// 3

switch (firstName) {
    case "Mariam" :
        console.log("true");
        break;


default:
    console.log("false");
}
