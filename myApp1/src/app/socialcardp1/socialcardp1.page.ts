import { Component, OnInit } from '@angular/core';
import { Story } from './story.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-socialcardp1',
  templateUrl: './socialcardp1.page.html',
  styleUrls: ['./socialcardp1.page.scss'],
})
export class Socialcardp1Page implements OnInit {

  myDate: string = new Date().toISOString();

  storylist: Array<Story>;

  constructor(public alertCtrl: AlertController) {
    this.storylist = new Array();
  }

  ngOnInit() {
    this.storylist.push(new Story(1, '../../assets/images/1.jpg', 'Sea', 'This is Sea.'));
    this.storylist.push(new Story(2, '../../assets/images/2.jpg', 'Waterfall', 'This is Waterfall.'));
  }

  handleLike(i: number) {
    this.storylist[i].likevalue++;
  }

  async showFormComment(i: number) {
    const prompt = await this.alertCtrl.create({
      header: 'Comment',
      message: 'Enter a comment',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '...'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            this.storylist[i].commentlist.push(data.name1);
          }
        }
      ]
    });
    await prompt.present();
  }

}
