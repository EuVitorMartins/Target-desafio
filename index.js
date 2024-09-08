const inquirer = require('inquirer');

// Função para verificar se um número pertence à sequência de Fibonacci
function fibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }
    return b === n || n === 0;
}

// Função para contar a letra 'a' em uma string
function validaA(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'a') count++;
    }
    return count;
}

// Função para resolver o problema do valor da variável SOMA
function calculaSoma() {
    let INDICE = 12, SOMA = 0, K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return SOMA;
}

// Perguntas com inquirer
inquirer.prompt([
    {
        type: 'input',
        name: 'fibonacciNumber',
        message: 'Informe um número para verificar se pertence à sequência de Fibonacci:',
        validate: input => !isNaN(input) || 'Por favor, insira um número válido.'
    },
    {
        type: 'input',
        name: 'stringToCheck',
        message: 'Informe uma string para verificar a quantidade de letras "a":',
    }
]).then(answers => {
    const num = parseInt(answers.fibonacciNumber);
    const string = answers.stringToCheck;

    // Verificando Fibonacci
    if (fibonacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }

    // Verificando quantidade de letras 'a'
    const quantidade = validaA(string);
    console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);

    // Calculando o valor de SOMA
    const soma = calculaSoma();
    console.log(`O valor final da variável SOMA é ${soma}.`);
});
