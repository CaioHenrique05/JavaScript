function estaEndividado(receita, gasto) {
  if (receita > gasto) {
    return "Esta no AZUL!!"
  } else {
    return "Esta no Vermelho!!"
  }
}

const daniel = estaEndividado(5000, 7000)
const gabriel = estaEndividado(10000, 3000)

console.log(gabriel)
console.log(daniel)