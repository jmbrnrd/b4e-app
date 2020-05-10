import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  isLoading = true;
  loginError = false;
  loadMessage = 'Establishing secure connection';
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  login(f) {
    this.api.getClient(f.user).subscribe((data) => {
      if (data.length) {
        const client = data[0];
        if (client.client_password === f.pwd) {
          this.auth.setCurrentClient(client);
          this.loginError = false;
          this.router.navigate(['/verify']);
        } else {
          console.log('Invalid Password');
          this.loginError = true;
        }
      } else {
        console.log('No such user');
        this.loginError = true;
      }
    });
  }
  clearInputs(frm) {
    this.loginError = false;
    frm.reset();
    frm.controls.user.focus();
  }
}
