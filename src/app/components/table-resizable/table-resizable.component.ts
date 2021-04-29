import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ResizeEvent } from 'angular-resizable-element';


@Component({
  selector: 'app-table-resizable',
  templateUrl: './table-resizable.component.html',
  styleUrls: ['./table-resizable.component.css']
})
export class TableResizableComponent implements OnInit {
  @Input() DynamicData: any[] = [];

  dataSource;
  displayedColumns;
  
  constructor() { 
    
  }

  ngOnInit() {
    if (this.DynamicData && this.DynamicData.length > 0){
      this.displayedColumns = Object.keys(this.DynamicData[0]);
      this.dataSource = new MatTableDataSource<any>(this.DynamicData);
    }
  }

  onResizeEnd(event: ResizeEvent, columnName): void {
    if (event.edges.right) {
      const cssValue = event.rectangle.width + 'px';
      const columnElts = document.getElementsByClassName('mat-column-' + columnName);
      for (let i = 0; i < columnElts.length; i++) {
        const currentEl = columnElts[i] as HTMLDivElement;
        currentEl.style.width = cssValue;
      }
    }
  }
}




