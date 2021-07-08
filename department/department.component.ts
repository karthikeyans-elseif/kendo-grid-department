import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // public state: State = {
  //   skip: 0,
  //   take: 5,

  //   // Initial filter descriptor
  //   filter: {
  //     logic: "and",
  //     filters: [{ field: "ProductName", operator: "contains", value: "Chef" }],
  //   },
  // };

  // public gridData: GridDataResult = process(sampleProducts, this.state);

  // public dataStateChange(state: DataStateChangeEvent): void {
  //   this.state = state;
  //   this.gridData = process(sampleProducts, this.state);
  // }
}
