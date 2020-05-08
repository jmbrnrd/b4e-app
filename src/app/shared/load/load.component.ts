import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styles: []
})
export class LoadComponent implements OnInit {
  @Input() loadMessage;
  constructor() { }

  ngOnInit(): void {
  }

}
