import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-profile-video',
  templateUrl: './profile-video.component.html',
  styleUrls: ['./profile-video.component.css']
})
export class ProfileVideoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ProfileVideoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
