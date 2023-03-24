export class AppComponent {
}
  veicoli: Veicolo[] = [
    {
      id: 1,
      modello: "127",
      marca: "Fiat",
      prezzo: 1300,
      velocitamax: 110
    },
    {
      id: 2,
      modello: "Giulietta",
      marca: "Alfa Romeo",
      prezzo: 4000,
      velocitamax: 180
    },
    {
      id: 3,
      modello: "Fiesta",
      marca: "Ford",
      prezzo: 1600,
      velocitamax: 130
    },
    {
      id: 4,
      modello: "Baracca",
      marca: "Subaru",
      prezzo: 5500,
      velocitamax: 170
    }
  ];
}
ordinaVeicoli() {
  this.veicoli.sort((a, b) => a.prezzo - b.prezzo);
}