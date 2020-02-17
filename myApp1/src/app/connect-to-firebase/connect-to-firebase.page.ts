// import { Component, OnInit } from '@angular/core';
// import { ServiceAPICRUD } from './serviceAPICRUD.page';

// @Component({
//   selector: 'app-dbhomep1',
//   templateUrl: './connect-to-firebase.page.html',
//   styleUrls: ['./connect-to-firebase.page.scss'],
// })
// export class Dbhomep1Page implements OnInit {

//   tasklist: any;

//   constructor(private myapi: ServiceAPICRUD) { }

//   ngOnInit() {
//     this.myapi.readData().subscribe(data => {
//       this.tasklist = data.map(e => {
//         return {
//           id: e.payload.doc.id,
//           isEdit: false,
//           myplace: e.payload.doc.data()['place'.toString()],
//           mytitle: e.payload.doc.data()['title'.toString()],
//           mydate: e.payload.doc.data()['tododate'.toString()],
//         };
//       });
//       console.log(this.tasklist);
//     });
//   }

//   _edit(id: string) {
//     console.log('edit = ', id);
//   }

//   _delete(id: string) {
//     console.log('delete = ', id);
//   }

// }
