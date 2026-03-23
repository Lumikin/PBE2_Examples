class Carro {
  // Propriedades privadas sao definidas com uso de #
  #marca;
  #modelo;
  #ano;
  #cor;
  #valor;

  // Construtor da classe que recebe os parametros para a criação do objeto
  constructor(marca, modelo, ano, cor) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
    this.#cor = cor;
  }
  // Metodo acessor para recuperar um valor

  get valor() {
    return this.#valor;
  }
  // metodo para retornar informação do objetivo
  set valor(value) {
    this.#valor = value;
  }

  // Metodo para retornar a informação do objeto
  mostrarInfo() {
    return `Marca: ${this.#marca} | Modelo: ${this.#modelo} | Ano: ${this.#ano} | Cor: ${this.#cor} | Valor: ${this.#valor}`;
  }
}

const carro1 = new Carro("Chevrolet", "Cruze", 2025, "Cinza");
const carro2 = new Carro("Volkswagen", "UP", 2022, "Branco");

carro1.valor = 120000.00;
carro2.valor = 50000.00;
console.log(carro1.valor)
console.log(carro2.valor)

// console.log(carro1.mostrarInfo());
// console.log(carro2.mostrarInfo());
