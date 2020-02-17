import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listviewp1',
  templateUrl: './listviewp1.page.html',
  styleUrls: ['./listviewp1.page.scss'],
})
export class Listviewp1Page implements OnInit {



  // itemlist: string[] = ['Thiland', 'Veitnam', 'Singpore'];

  // itemlist: Array<string> = ['Thiland', 'Veitnam', 'Singpore', 'Malasia'];
  itemlist = [
    {
      id: 1,
      name: 'Banana',
    },
    {id: 2,
      name: 'Rambutan',
    },
    {
      id: 1,
      name: 'Apple',
    },
    {
      id: 1,
      name: 'Coconut',
    },
    {
      id: 1,
      name: 'Durian',
    },
    {
      id: 1,
      name: 'Strawberry',
    },
    {
      id: 1,
      name: 'Pine Apple',
    },
    {
      id: 1,
      name: 'Orange',
    },
    {
      id: 1,
      name: 'Water Melon',
    },
  ];


  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  editItem() {

  }
  edit(item) {

  }
  removeItem(item) {
    for (let i = 0; this.itemlist.length; i++) {
      if (this.itemlist[i].id === item) {
        this.itemlist.splice(i, 1);
    }
  }
}

  // async showToast(item) {
  //   const toast = await this.toastCtrl.create({
  //     /*message: 'It is a Toast Notification',
  //     showCloseButton: true,
  //     closeButtonText: 'hide', */
  //     message: 'message here...' + item,
  //     duration: 5000,
  //   });
  //   toast.present();
  // }

}
