import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkgame',
  templateUrl: './checkgame.page.html',
  styleUrls: ['./checkgame.page.scss'],
})
export class CheckgamePage implements OnInit {

  gameList: any = [
    {
      id: '1',
      name: 'ROV',
      value: 0,
      checked: true,
      disable: false
    },
    {
      id: '2',
      name: 'Pokemon 3D',
      value: 0,
      checked: false,
      disable: false
    },
    {
      id: '3',
      name: 'Cadence of Hyule',
      value: 0,
      checked: false,
      disable: false
    },
    {
      id: '4',
      name: 'Super Mario Maker 2',
      value: 0,
      checked: true,
      disable: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  Submit() {
    for (let i = 0; i <= this.gameList.length; i++) {
      // tslint:disable-next-line: triple-equals
      if (this.gameList[i].checked == true) {
        this.gameList[i].value += 1;
      }
      this.gameList[i].checked = false;
    }
  }

}
