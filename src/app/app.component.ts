import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'b4e-app';
  cols: number;
  rows: number;
  text: string;
  border: string;
  tiles: any = [
    {text: 'Tile 1', cols: 2, rows: 1 , border: 'solid 3px purple'},
    {text: 'Tile 2', cols: 2, rows: 1 , border: 'solid 3px red'},
    {text: 'Tile 3', cols: 2, rows: 1 , border: 'solid 3px skyblue'},
    {text: 'Tile 4', cols: 2, rows: 1 , border: 'solid 3px yellow'},
  ];
}
