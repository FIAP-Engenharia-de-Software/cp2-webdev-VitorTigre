// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  if (peso===`abc`) {
    return"Erro"
  }

  if (altura==null) {
    return"Erro"
  }

  if (altura === 0){
    return"Erro"
  }


  if (peso / (altura * altura)< 18.5){
    return"Abaixo do peso"
  }
  if (peso / (altura * altura)>= 18.5 && peso / (altura * altura)<=24.9){
    return"Peso normal"
  }
  if (peso / (altura * altura) >=25 && peso/(altura * altura)<=29.9){
    return"Sobrepeso"
  }
  if (peso / (altura * altura)>= 30){
    return"Obesidade"
  }
}
// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };