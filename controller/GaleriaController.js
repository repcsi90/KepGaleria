import { LISTA } from "../adat.js"; // import { LISTA from "../adat.js";}
import GaleriaModell from "../modell/GaleriaModell.js"; // import GaleriaModell from "..//modell/GaleriaModell.js"

import JatekTer from "../view/Jatekter.js";
import NagyKartya from "../view/NagyKartya.js";
export default class GaleriaController {
  constructor() {
    this.taroloELEM = $(".tartalom"); //ide teszem a kisképeket HTMl DOM elem
    this.kivELEM = $(".kivalasztott");
    //példányosítja a view-kat
    this.galeriaModell = new GaleriaModell(LISTA);

    let aktObj = this.galeriaModell.setAktElem(0);
    new NagyKartya(aktObj, this.kivELEM);

    new JatekTer(LISTA, this.taroloELEM);
    //7példányosítja a modellt
    //feliratkozik az eseményekre
    this.kivalasztEsemenykezelo();
    this.balEsemenykezelo()
    this.jobbEsemenyKezelo()
  }
  jobbEsemenyKezelo() {
    $(window).on("jobb", (event) => {
      console.log("jobb gombra kattintottam");

      let aktObj = this.galeriaModell.jobbraLep();
      new NagyKartya(aktObj, this.kivELEM);
    });
  }
  balEsemenykezelo() {
    $(window).on("bal", (event) => {
      console.log("bal gombra kattintottam");
      let aktObj = this.galeriaModell.balraLep();
      new NagyKartya(aktObj, this.kivELEM);
    });
  }
  kivalasztEsemenykezelo() {
    $(window).on("kivalaszt", (event) => {
      console.log(event.detail);
      //beállítsuk az aktuális indenxet a kiválasztott elem indexére
      let aktObj = this.galeriaModell.setAktElem(event.detail.id);
      new NagyKartya(aktObj, this.kivELEM);
    });
  }
}
