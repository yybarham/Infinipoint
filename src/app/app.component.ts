import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ResizeEvent } from 'angular-resizable-element';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   DATA1: any[] = [
  { id: 1, name: 'red', description: 'high', price: 2.55 },
  { id: 2, name: 'blue', description: 'low', price: 2.04 },
  { id: 3, name: 'green', description: 'medium', price: 4.1 },
  { id: 4, name: 'yellow', description: 'very high', price: 6.8 },
  { id: 5, name: 'black', description: 'very low', price: 5.7 },
  { id: 6, name: 'gray', description: 'high', price: 3.56 },
  { id: 7, name: 'white', description: 'deep', price: 2.51 },];

 DATA2 : any[] = [
  { rowid: 11, user: 'ab1', weight: 22.9897, height: 4.6 },
  { rowid: 12, user: 'cd2', weight: 24.305, height: 6.7 },
  { rowid: 13, user: 'gm3', weight: 26.9815, height: 7.7 },
  { rowid: 14, user: 'ag6', weight: 28.0855, height: 1.9 },
  { rowid: 15, user: 'dg2', weight: 30.9738, height: 4.2 },
  { rowid: 16, user: 'mn2', weight: 32.065, height: 9.3 },
  { rowid: 17, user: 'lk4', weight: 35.453, height: 1.1 },]
}