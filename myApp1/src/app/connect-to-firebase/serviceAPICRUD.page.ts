import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})

export class ServiceAPICRUD {
    constructor(private myfirestore: AngularFirestore) { }

    // CRUD Operation

    // snapshotChange คือ เมื่อมีการอัพเดทก็จะอััพเดทอัตโนมัติ
    readData() {
        return this.myfirestore.collection('mytasklist').snapshotChanges();
    }
}
