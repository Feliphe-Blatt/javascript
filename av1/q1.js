function calculadora(a, b, operacao) {

  if (operacao === 'soma') {
    return a + b;

  } else if (operacao === 'subtração') {
    return a - b;

  } else if (operacao === 'multiplicação') {
    return a * b;

  } else if (operacao === 'divisão') {
    return a / b;

  } else {
    return 'Operação inválida';
  }
}

console.log(calculadora(2, 3, 'soma'));
console.log(calculadora(3, 6, 'subtração'));
console.log(calculadora(5, 7, 'multiplicação'));
console.log(calculadora(45, 7, 'divisão'));
console.log(calculadora(8, 8, 'potenciação'));
