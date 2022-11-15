import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  visitados: any[] = [
    {
      "imagen": "assets/img/1.jpg",
      "ciudad": "Natales",
      "pais": "Chile",
      "zona": "Patagonia",
      "fecha": "1 - 15 dic",
      "precio": "175.000 CLP"
    },
    {
      "imagen": "assets/img/2.jpg",
      "ciudad": "Punta Arenas",
      "pais": "Chile",
      "zona": "Magallanes",
      "fecha": "10 - 15 ene",
      "precio": "275.000 CLP"
    },
    {
      "imagen": "assets/img/3.jpg",
      "ciudad": "Coyhaique",
      "pais": "Chile",
      "zona": "Patagonia",
      "fecha": "8 - 21 feb",
      "precio": "375.000 CLP"
    },
    {
      "imagen": "assets/img/4.jpg",
      "ciudad": "Aysen",
      "pais": "Chile",
      "zona": "Patagonia",
      "fecha": "20 - 25 mar",
      "precio": "255.000 CLP"
    },
  ];
  constructor() {}

}
