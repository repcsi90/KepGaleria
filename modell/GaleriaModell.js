export default class GaleriaModell {
  #lista = [];
  #aktElem;
  constructor(lista) {
    this.#lista = lista;
    this.#aktElem = 0;
  }
  setAktElem(id){
    this.#aktElem=id;
    return this.#lista[this.#aktElem]
  }
  balraLep() {
    this.#aktElem--;
    if (this.#aktElem < 0) {
      this.#aktElem = this.#lista.length - 1;
    }
    return this.#lista[this.#aktElem]//objektum, a listának az akutális eleme
  }
  jobbraLep() {
    this.#aktElem++;
    if (this.#aktElem >= this.#lista.length) {
      this.#aktElem = 0;
    }
    return this.#lista[this.#aktElem]
  }
}
