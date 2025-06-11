import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {
  friends = [
    { name: 'Alicia' },
    { name: 'Bob' },
  ];

  constructor () {}

  ngOnInit(): void {}
}
