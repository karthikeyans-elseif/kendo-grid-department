import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddEditDepComponent } from './add-edit-dep/add-edit-dep.component';



@NgModule({
  declarations: [
    AddEditDepComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    BrowserAnimationsModule
  ]
})
export class DepartmentModule { }
