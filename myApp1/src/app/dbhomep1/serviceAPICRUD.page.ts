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


    deleteData(id: string) {
        return this.myfirestore.doc('mytasklist/' + id).delete();
    }

    createData(record) {
        return this.myfirestore.collection('mytasklist').add(record);
    }

    updateData(recordID, record) {
        return this.myfirestore.doc('mytasklist/' + recordID).update(record);
    }

}
