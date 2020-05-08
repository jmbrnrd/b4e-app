import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styles: []
})
export class VerifyComponent implements OnInit {
  isLoading = true;
  @Input() loadMessage: string;
  scanStatusMsg = 'AWAITING FINGERPRINT SCAN';
  scanSuccess = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadMessage = 'Authenticating login details...';
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
  scanComplete() {
    this.scanSuccess = true;
    this.scanStatusMsg = 'SUCCESSFUL SCAN';
    setTimeout(() => {
      this.router.navigate(['vaults']);
    }, 1000);
  }

}
