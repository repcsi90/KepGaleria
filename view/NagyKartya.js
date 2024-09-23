export default class NagyKartya {
  //adattagok
  #obj = {}; //privát adattag
  #szuloElem;
  //construktor -
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.#szuloElem.empty()
    this.kiir();
    this.balGomb = $(".bal");
    this.balGomb.on("click", () => {
      this.esemenyTrigger("bal");
    });
    this.jobbGomb = $(".jobb");
    this.jobbGomb.on("click", () => {
      this.esemenyTrigger("jobb");
    });
  }

  esemenyTrigger(eNev) {
    const e = new CustomEvent(eNev);
    window.dispatchEvent(e);
  }
  //tagfüggvény
  kiir() {
    //egyetlen egy kép kíírása
    this.#szuloElem.append(`
             <button class="bal col-1">BAL</button>
              <div class="card col-10 ">
                <div class="card-body">  
                    <h3>${this.#obj.nev}</h3>               
                    <img src="${this.#obj.url}" alt="${
      this.#obj.nev
    }" class="card-img-top">
                </div>
              </div>
              <button class="jobb col-1">JOBB</button>
            
            `);
  }
}
