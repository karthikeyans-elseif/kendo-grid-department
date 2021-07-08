import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean=false;
  dep:any;
  item:any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp =true;

  }

   editClick(item){
    this.dep= item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp =true;

  }

  deleteClick(item){
    console.log("val", item);
    if(confirm('Are you Sure?')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data =>{
        alert(data.toString);
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
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
