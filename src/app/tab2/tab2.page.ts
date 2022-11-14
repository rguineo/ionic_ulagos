import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  favoritos: any[] = [
    {
      "imagen": "assets/img/1.jpg",
      "ciudad": "Natales"
    },
    {
      "imagen": "assets/img/2.jpg",
      "ciudad": "Punta Arenas"
    },
    {
      "imagen": "assets/img/3.jpg",
      "ciudad": "Coyhaique"
    },
    {
      "imagen": "assets/img/4.jpg",
      "ciudad": "Aysen"
    },
  ];
  
  constructor() {}

}
