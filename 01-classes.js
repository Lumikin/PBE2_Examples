class Carro {
  #marca;
  #modelo;
  #ano;
  #cor;

  constructor(marca, modelo, ano, cor) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
    this.#cor = cor;
  }
}

const carro1 = new Carro("Chevrolet", "Cruze", 2025, "Cinza");
