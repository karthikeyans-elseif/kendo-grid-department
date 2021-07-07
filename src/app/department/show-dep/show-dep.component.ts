import { SharedService } from './../../shared.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GridDataResult } from "@progress/kendo-angular-grid";
import { State } from "@progress/kendo-data-query";
import { map } from "rxjs/operators";
import { DepartmentService } from "../../department.service";
import { Observable } from 'rxjs';
// import { Product } from "./model";

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data =>{
      this.DepartmentList = data;
    })
  }

  // public view: Observable<GridDataResult>;
  // public gridState: State = {
  //   sort: [],
  //   skip: 0,
  //   take: 10,
  // };

  // private editService: DepartmentService;
  // private editedRowIndex: number;
  // private editedProduct: Product;

  // constructor(@Inject(DepartmentService) editServiceFactory: any) {
  //   this.editService = editServiceFactory();
  // }

  // public ngOnInit(): void {
  //   this.view = this.editService.pipe(
  //     map((data) => process(data, this.gridState))
  //   );

  //   this.editService.read();
  // }

  // public onStateChange(state: State) {
  //   this.gridState = state;

  //   this.editService.read();
  // }

  // public addHandler({ sender }, formInstance) {
  //   formInstance.reset();
  //   this.closeEditor(sender);

  //   sender.addRow(new Product());
  // }

  // public editHandler({ sender, rowIndex, dataItem }) {
  //   this.closeEditor(sender);

  //   this.editedRowIndex = rowIndex;
  //   this.editedProduct = Object.assign({}, dataItem);

  //   sender.editRow(rowIndex);
  // }

  // public cancelHandler({ sender, rowIndex }) {
  //   this.closeEditor(sender, rowIndex);
  // }

  // public saveHandler({ sender, rowIndex, dataItem, isNew }) {
  //   this.editService.save(dataItem, isNew);

  //   sender.closeRow(rowIndex);

  //   this.editedRowIndex = undefined;
  //   this.editedProduct = undefined;
  // }

  // public removeHandler({ dataItem }) {
  //   this.editService.remove(dataItem);
  // }

  // private closeEditor(grid, rowIndex = this.editedRowIndex) {
  //   grid.closeRow(rowIndex);
  //   this.editService.resetItem(this.editedProduct);
  //   this.editedRowIndex = undefined;
  //   this.editedProduct = undefined;
  // }
}
