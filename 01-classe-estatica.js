class Calculadora {
  
static somar(num1, num2) {
    return num1 + num2;
  }

static multiplicar(a, b, c) {
    return a * b * c;
  }
}

console.log(Calculadora.somar(4, 10));
console.log(Calculadora.multiplicar(2, 3, 4));