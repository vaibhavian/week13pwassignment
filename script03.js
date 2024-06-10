
let amountInINR = 850;


const exchangeRate = 82;


let amountInUSD = amountInINR / exchangeRate;


console.log(`${amountInINR} INR is ${amountInUSD.toFixed(2)} USD`);
