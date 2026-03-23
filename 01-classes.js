class Carro {
// Propriedades privadas sao definidas com uso de #
  #marca;
  #modelo;
  #ano;
  #cor;
// Construtor da classe que recebe os parametros para a criação do objeto
  constructor(marca, modelo, ano, cor) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
    this.#cor = cor;
  }
// Metodo para retornar a informação do objeto
  mostrarInfo() {
    return `Marca: ${this.#marca} | Modelo: ${this.#modelo} | Ano: ${this.#ano} | Cor: ${this.#cor}`;
  }
}

const carro1 = new Carro("Chevrolet", "Cruze", 2025, "Cinza");
const carro2 = new Carro("Volkswagen", "UP", 2022, "Branco");

console.log(carro1.mostrarInfo());
console.log(carro2.mostrarInfo());
