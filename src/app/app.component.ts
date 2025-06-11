import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor(private router: Router) {}
  isAuthPage(): boolean {
    return this.router.url.startsWith('/login') || this.router.url.startsWith('/signup'); //  for not render main elements
  }
}
