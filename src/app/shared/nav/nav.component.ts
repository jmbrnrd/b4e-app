import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  navOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  navTo(tgt) {
    console.log(tgt);
  }
  navMore() {
    this.navOpen = !this.navOpen;
    console.log('navMore open = ' + this.navOpen);
  }

}
