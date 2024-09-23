export default class Kartya {
  //adattagok
  #obj = {}; //privát adattag
  #szuloElem;
  //construktor -
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kiir();
    this.kepElem = $(".kivalaszt:last");
    //console.log(this)
    this.esemenyKezelo();
  }
  //tagfüggvény
  kiir() {
    //egyetlen egy kép kíírása
    this.#szuloElem.append(`
            <div class="card kivalaszt col-lg-3 col-md-4 col-sm-6 ">
                <div class="card-body">                 
                    <img src="${this.#obj.url}" alt="${this.#obj.cim}" class="card-img-top">
               </div>
            </div>
            `);
  }

  //gombesemények kezelése
  esemenyKezelo() {
    this.kepElem.on("click", () => {
      //console.log(this);
      //létrehozunk egy saját eseményt
      console.log("ojektumban kattintok")
      const e = new CustomEvent("kivalaszt", { detail: this.#obj });
      window.dispatchEvent(e);
    });
  }
}
