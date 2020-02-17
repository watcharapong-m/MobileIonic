import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BMIPage implements OnInit {

  height: string;
  weight: string;

  constructor(public navCtrl: NavController, public route: Router) { }

  ngOnInit() {
  }

  Submit() {
    this.navCtrl.navigateForward('resultbmi' + '/' + this.height + '/' + this.weight);
  }

}
