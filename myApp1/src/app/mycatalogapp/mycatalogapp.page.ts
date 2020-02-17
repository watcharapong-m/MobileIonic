import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mycatalogapp',
  templateUrl: './mycatalogapp.page.html',
  styleUrls: ['./mycatalogapp.page.scss'],
})
export class MycatalogappPage implements OnInit {

  listorder: any[] = [];

  listId: any;

  public product = [
    {
      id: '1',
      name: 'Face Powder',
      img: 'https://img.icons8.com/color/48/000000/face-powder.png',
      price: 145.5,
      isChecked: false,
      disable: false
    },
    {
      id: '2',
      name: 'Lipstick',
      img: 'https://img.icons8.com/color/48/000000/lipstick.png',
      price: 125.5,
      isChecked: false,
      disable: false
    },
    {
      id: '3',
      name: 'Foundation Makeup',
      img: 'https://img.icons8.com/color/48/000000/foundation-makeup.png',
      price: 245.5,
      isChecked: false,
      disable: false
    },
    {
      id: '4',
      name: 'Perfume',
      img: 'https://img.icons8.com/color/48/000000/perfume-bottle.png',
      price: 405.2,
      isChecked: false,
      disable: false
    },
    {
      id: '5',
      name: 'Cream Tube',
      img: 'https://img.icons8.com/color/48/000000/cream-tube.png',
      price: 115.2,
      isChecked: false,
      disable: false
    },
  ];

  constructor(public navCtrl: NavController, public route: Router, private activateroute: ActivatedRoute) { }

  ngOnInit() {
  }

  buy() {
    this.listorder = [];
    this.listId = [];
    for (let i = 0; i <= this.product.length - 1; i++) {
      if (this.product[i].isChecked === true) {
        // this.listorder.push(this.product[i]);
        this.listId.push(this.product[i].id);
      }
      this.product[i].isChecked = false;
    }

    const dataObj = {
      order: this.listId,
    };


    this.navCtrl.navigateForward('catalogresult' + '/' + JSON.stringify(dataObj));

  }

} //
