import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:53535/api";
  readonly PhotoUrl = "http://localhost:53535/Photos";

  constructor(private http: HttpClient) { }


  /* GET DEPARTMENT */
  getDepList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/department');
  }

  /* ADD DEPARTMENT */
  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  /* UPDATE DEPARTMENT */
  updateDepartment(val:any) {
    return this.http.put(this.APIUrl+'/Department',val);
  }

  /* DELETE DEPARTMENT */
  deleteDepartment(val:any) {
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }

  /* EMPLOYEE */

    /* GET EMPLOYEE */
    getEmpList():Observable<any[]> {
      return this.http.get<any>(this.APIUrl+'/Employee');
    }

    /* ADD EMPLOYEE */
    addEmployee(val:any){
      return this.http.post(this.APIUrl+'/Employee',val);
    }

    /* UPDATE EMPLOYEE */
    updateEmployee(val:any) {
      return this.http.put(this.APIUrl+'/Employee',val);
    }

    /* DELETE EMPLOYEE */
    deleteEmployee(val:any) {
      return this.http.delete(this.APIUrl+'/Employee/'+val);
    }

    /*  */

    /* PROFILE PICTURE */
    UploadPhoto(val:any) {
      return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
    }

    /*  */

    /* GET ALL DEPARTMENTS NAMES */
    get getAllDepartmentNames():Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
    }
}
