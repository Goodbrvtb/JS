function arithmetic(a, b, operator){
 switch (operator){
    case 'add':
    return a+b;
    case 'subtract':
    return a-b;
    case 'multiply':
    return a*b;
    case 'divide':
    return a/b;
    default:
    console.log("Ничего не совпало")
 }
  
  
}

console.log(arithmetic(1, 2, "add"))