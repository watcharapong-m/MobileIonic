import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultbmi',
  templateUrl: './resultbmi.page.html',
  styleUrls: ['./resultbmi.page.scss'],
})
export class ResultbmiPage implements OnInit {

  h: string;
  w: string;

  bmi: number;

  constructor(public navCtrl: NavController, public route: Router, private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.h = this.activateroute.snapshot.paramMap.get('height');
    this.w = this.activateroute.snapshot.paramMap.get('weight');

    this.bmi = Math.ceil(parseFloat(this.w) / ((parseFloat(this.h) / 100) ** 2));
  }

}
