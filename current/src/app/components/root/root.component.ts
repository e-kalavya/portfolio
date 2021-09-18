import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

declare var sal: any;

@Component({
  selector: 'portfolio-root-main',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  path = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    sal({ once: false });
    const urls = this.route.snapshot.url;
    if (urls !== undefined && urls.length > 0) {
      this.path = urls.map(url => url.path).join('-');
    }
  }
}
