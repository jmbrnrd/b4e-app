import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaults',
  templateUrl: './vaults.component.html',
  styles: []
})
export class VaultsComponent implements OnInit {
  isLoading = true;
  @Input() loadMessage: string;


  constructor() { }

  ngOnInit(): void {
    this.loadMessage = 'One moment whilst we retrieve your private vaults';
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

}
