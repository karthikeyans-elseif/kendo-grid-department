import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api";
  // readonly PhotoUrl = "http://localhost:5000/Photos/";
  constructor(private http: HttpClient) {}
  getDepList(): Observable < any[] > {
      return this.http.get < any > (this.APIUrl + '/department');
  }
  addDepartment(val: any) {
      return this.http.post(this.APIUrl + '/department', val);
  }
  updateDepartment(val: any) {
      return this.http.put(this.APIUrl + '/department', val);
  }
  deleteDepartment(val: any) {
      return this.http.delete(this.APIUrl + '/department/' + val);
  }
  getEmpList(): Observable < any[] > {
      return this.http.get < any > (this.APIUrl + '/employee');
  }
  addEmployee(val: any) {
      return this.http.post(this.APIUrl + '/employee', val);
  }
  updateEmployee(val: any) {
      return this.http.put(this.APIUrl + '/employee', val);
  }
  deleteEmployee(val: any) {
      return this.http.delete(this.APIUrl + '/employee/' + val);
  }
  UploadPhoto(val: any) {
      return this.http.post(this.APIUrl + '/employee/SaveFile', val);
  }
  getAllDepartmentNames(): Observable < any[] > {
      return this.http.get < any[] > (this.APIUrl + '/employee/GetAllDepartmentNames');
  }
}
