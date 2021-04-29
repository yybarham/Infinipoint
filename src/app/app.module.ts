import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { ResizableModule } from 'angular-resizable-element';
import { TableResizableComponent } from './components/table-resizable/table-resizable.component';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatTableModule, ResizableModule ],
  declarations: [ AppComponent, TableResizableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
