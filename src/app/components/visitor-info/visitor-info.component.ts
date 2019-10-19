import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of as observableOf, Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { DocumentData } from '@firebase/firestore-types';
import { pipe } from 'rxjs/internal/util/pipe';

@Component({
  selector: 'app-visitor-info',
  templateUrl: './visitor-info.component.html',
  styleUrls: ['./visitor-info.component.scss']
})
export class VisitorInfoComponent implements OnInit {

  visitorForm: FormGroup;

  countriesList: DocumentData[];  
  filteredCountriesList: Observable<DocumentData[]>;

  constructor(public sheetRef: MatBottomSheetRef<VisitorInfoComponent>, private fb: FormBuilder, private dataStore: AngularFirestore) { }

  ngOnInit() {
    // this.countriesList.includes()
    const countryDb = this.dataStore.collection('/countries_info').ref;
    countryDb.onSnapshot(countriesSnap => {
        if (countriesSnap.size > 0) {
          this.countriesList = countriesSnap.docs.map(country => {
            if (country.exists) {
              return country.data();
            }
          });
          this.filteredCountriesList = observableOf(this.countriesList);
        }
    });
    this.visitorForm = this.fb.group({
      emailId: ['', Validators.compose([Validators.required, Validators.email])],
      country: ['', Validators.required]
    });
    
    this.visitorForm.get('country').valueChanges.subscribe((val: string) => {
      this.filteredCountriesList =  observableOf(this.countriesList.filter(countryData => {
        return ( (<string>countryData.name).toLowerCase().startsWith(val.toLowerCase())
          || (<string>countryData.name).toLowerCase().includes(val.toLowerCase()) );
        // return (<string>countryData.name).toLowerCase().indexOf(val.trim().toLowerCase()) !== -1;
      }).sort((doc1, doc2) => {
        return (<string>doc1.name).localeCompare((<string>doc2.name));
      }));
    });
  }

  countrydisplay(country?: any): string | undefined {
    return country ? country.name : undefined;
  }
  
  saveInfo() {
    const mail = this.visitorForm.get('emailId').value;
    const country = this.visitorForm.get('country').value;
    const visitorsDb = this.dataStore.collection('/visitors_info').ref;
    visitorsDb.where('mail_id', '==', mail).get().then(visitorsSnap => {
      if (visitorsSnap.empty) {
        visitorsDb.add({
          'mail_id': mail,
          'country': country
        }).then(() => {
          console.log('visitor\'s Information saved successfully');
        });
      } else {
        console.log('We have your informations already');
      }
    });
  }

  validate(): boolean {
    const country = this.visitorForm.get('country').value;
    /* if (this.visitorForm.valid && !this.countriesList.includes(country)) {
      this.countriesList.forEach(val => {
        if (val.name === country) {
          this.visitorForm.get('country').setValue(val);
          return false;
        }
      });
    } */
    return this.visitorForm.invalid || !this.countriesList.includes(country);
  }

}
