import { Component, OnInit } from '@angular/core';
import { ParticleJsConfig } from '../../../assets/particlejs-config';

declare var particlesJS: any;

@Component({
  selector: 'portfolio-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.scss']
})
export class ParticleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    particlesJS('particles-js', ParticleJsConfig, () => {
      console.log('background particle loaded');
    });
  }
}
