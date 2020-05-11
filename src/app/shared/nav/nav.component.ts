import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  navOpen = false;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  nav(tgt) {
    console.log(tgt);
    switch (tgt) {
      case 'more': {
        this.router.navigate([]);
        break;
      }
      case 'logout': {
        this.auth.logout();
        this.router.navigate(['/']);
        break;
      }
      default: {
        this.router.navigate([tgt]);
        break;
      }
    }
  }
  navMore() {
    this.navOpen = !this.navOpen;
  }
}
