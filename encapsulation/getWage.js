let baseSalary = 30_000;
let rate = 20;
let overTime = 10;

function getWage(baseSalary, rate, overTime) {
     return baseSalary + (rate * overTime);
}
console.log(getWage(baseSalary, rate, overTime))