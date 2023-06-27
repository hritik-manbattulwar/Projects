import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  name = 'Get Current Url Route Demo';
  currentRoute: string = '';
  constructor(private router: Router) {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.url.substring(event.url.lastIndexOf('/') + 1);
          }
        });
  }

  onOutletLoaded(component: any) {
    component.someProperty = 'someValue';
  }
}