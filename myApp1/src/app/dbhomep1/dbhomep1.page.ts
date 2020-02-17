import { Component, OnInit } from '@angular/core';
import { ServiceAPICRUD } from './serviceAPICRUD.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dbhomep1',
  templateUrl: './dbhomep1.page.html',
  styleUrls: ['./dbhomep1.page.scss'],
})
export class Dbhomep1Page implements OnInit {

  tasklist: any;
  tmptitle: string;
  tmpplace: string;
  tmpdate: string = new Date().toISOString();
  isEdit: boolean;
  currentID: string;
  editRecord = {};

  constructor(private myapi: ServiceAPICRUD, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.myapi.readData().subscribe(data => {
      this.tasklist = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          myplace: e.payload.doc.data()['place'.toString()],
          mytitle: e.payload.doc.data()['title'.toString()],
          mydate: e.payload.doc.data()['tododate'.toString()],
        };
      });
      console.log(this.tasklist);
    });
  }

  _edit(id: string) {
    console.log('edit = ', id);
  }

  async removeData(id: string) {
    const alert = await this.alertCtrl.create({
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel Delete');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('delete = ', id);
            this.myapi.deleteData(id);
          }
        }
      ]
    });
    alert.present();
  }

  createRecord() {
    let record = {};
    record['title'] = this.tmptitle;
    record['place'] = this.tmpplace;
    // !!required to convert to Date before assignment!!
    record['tododate'] = new Date(this.tmpdate);

    this.myapi.createData(record).then(resp => {
      this.tmptitle = '';
      this.tmpplace = '';
      this.tmpdate = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  editData(record) {
    // let editRecord = {};
    // this.editRecord['title'] = record['mytitle'];
    // this.editRecord['place'] = record['myplace'];

    this.tmptitle = record['mytitle'];
    this.tmpplace = record['myplace'];

    this.tmpdate = new Date(record['mydate'].toDate()).toISOString();
    // this.editRecord['tododate'] = new Date(this.tmpdate);

    this.currentID = record.id;

    this.isEdit = true;
  }

  updateRecord() {
    let newRecord;
    newRecord = {
      title: this.tmptitle,
      place: this.tmpplace,
      tododate: new Date(this.tmpdate)
    };
    this.myapi.updateData(this.currentID, newRecord); // update
    this.cancleEdit();
  }

  cancleEdit() {
    this.isEdit = false;
    // this.editRecord['title'] = '';
    // this.editRecord['place'] = '';
    this.tmptitle = '';
    this.tmpplace = '';
    this.tmpdate = new Date().toISOString();
  }

}
