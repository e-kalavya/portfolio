import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
// import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VocabService {
  // vocabList: AngularFirestoreCollection<any>;
  records: Observable<any[]>;

  /* constructor(private firestore: AngularFirestore) {
    // this.vocabList = this.firestore.collection('vocab_list');
  } */

  getAllVocabs(): Observable<any[]> {
    /*  this.vocabList.ref.where('itemType', '==', card_settings.currentGroup.toLowerCase()).onSnapshot((snap) => {
      snap.forEach(doc => {
        const vocab = doc.data() as Vocab;
        vocab.id = doc.id;
        console.log(vocab);
      });
    }); */

    // this.records = this.vocabList.snapshotChanges().map( actions => {
    //   return actions.map(action => {
    //     const vocab = action.payload.doc.data() as Vocab;
    //     vocab.id = action.payload.doc.id;
    //     return vocab;
    //   });
    // });
    return this.records;
  }

  getGroups(): any {
    return /* this.firestore.collection('vocab_groups').snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as any;
        const val = {value: action.payload.doc.id, viewValue: data.subgroup, disabled: false};
        return val;
      });
    }) */;
  }
}

export class Vocab {
  id: string;
  groupIds: Array<string>;
  itemType: string;

  dictionary?: string;
  meaning?: string;
  meaningList?: Array<string>;
  reading?: string;
  writing?: string;

  fromWord?: string;
  toWord?: string;
  langFrom?: string;
  langTo?: string;
}
