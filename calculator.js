//polymorphism
function sum(a,b){
    return a + b;
}
function sub(a,b){
    return b - a;
}
function mul(a,b){
    return a * b;
}
function calculator(a,b,operation){
   return operation(a,b);
}
console.log(calculator(3,5,sum));
console.log(calculator(3,5,sub));
console.log(calculator(3,5,mul));