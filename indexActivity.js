console.log('Hello, welcome to De La Salle University!');

function computeSupply(age,amountPerDay) {
    requiredSupply = Math.round(age * amountPerDay);
    return `You need to ${requiredSupply} to last you until the ripe age of ${age}.`;
}

console.log(computeSupply(70,3));
console.log(computeSupply(55.3,7));
console.log(computeSupply(40.4,11));
