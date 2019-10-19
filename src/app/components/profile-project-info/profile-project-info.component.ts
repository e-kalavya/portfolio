import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-profile-project-info',
  templateUrl: './profile-project-info.component.html',
  styleUrls: ['./profile-project-info.component.css']
})
export class ProfileProjectInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProfileProjectInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

     }

  ngOnInit() {
  }

}
