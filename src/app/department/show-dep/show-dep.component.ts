import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  DepartmentList:any=[];

  ModalTitle!: string;
  ActiveAddEditDepComp:boolean =false;
  dep:any;
  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentlistWithoutFilter:any=[];
  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep ={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActiveAddEditDepComp=true;
  }

  editClick(item:any) {
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActiveAddEditDepComp=true;
  }

  closeClick() {
    this.ActiveAddEditDepComp=false;
    this.refreshDepList();
  }

  deleteClick(item:any) {
    if(confirm('Are you sure ??')) {
      this.service.deleteDepartment(item.DepartmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      });
    }
  }


  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList=data;
      this.DepartmentlistWithoutFilter=data;
    });
  }

FilterFn () {
  var DepartmentIdFilter = this.DepartmentIdFilter;
  var DepartmentNameFilter = this.DepartmentNameFilter;

  this.DepartmentList = this.DepartmentlistWithoutFilter.filter (function (el:any){
    return el.DepartmentId.toString().toLowerCase().includes(
      DepartmentIdFilter.toString().trim().toLowerCase()
    ) &&
    el.DepartmentName.toString().toLowerCase().includes(
      DepartmentNameFilter.toString().trim().toLowerCase()
    )
  });
}

sortResult(prop:any, asc:any) {
  this.DepartmentList = this.DepartmentlistWithoutFilter.sort(function(a:any,b:any) {
    if(asc){
      return (a[prop] > b[prop]) ?1 : ((a[prop] < b[prop]) ?-1 :0);
    }else{
      return (b[prop] > a[prop]) ?1 : ((b[prop] < a[prop]) ?-1 :0);
    }
  });
}


}
