import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.titleService.setTitle('Home');
  }

  navigateProfile() {
    this.router.navigate(['/profile']);
  }
}
