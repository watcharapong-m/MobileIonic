import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogresult',
  templateUrl: './catalogresult.page.html',
  styleUrls: ['./catalogresult.page.scss'],
})
export class CatalogresultPage implements OnInit {


  listOrder: any[] = [];
  totalPrice = 0;

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
    const dataRecv = this.activateroute.snapshot.paramMap.get('dataObj');
    const obj = JSON.parse(dataRecv);

    this.listOrder = [];
    for (let j = 0; j <= obj.order.length - 1; j++) {
      for (let i = 0; i <= this.product.length - 1; i++) {
        if (this.product[i].id === obj.order[j]) {
          this.listOrder.push(this.product[i]);
          this.totalPrice += this.product[i].price;
          // console.log(this.totalPrice);
        }
      }
    }


  }

  back() {
    this.navCtrl.pop();
  }

}
