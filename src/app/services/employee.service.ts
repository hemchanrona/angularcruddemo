import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // url = 'https://localhost:44341/api';

  constructor(private http: HttpClient) { }

  // getBaseUrl() {
  //   return 'http://localhost:44344/';
  // }


  // --- http://localhost:44344/ is using on proxy file (proxy.conf.json) --- //
  // --- and setting it up in angular.json serve=>option --- //
  // --- also pakage.json for setting up npm start --- //
  getEmployees() {
    // const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.get('api/Employees');
  }

  // getTestMessage(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //       this.http
  //           .get(`api/Employees`);
  //   });
  // }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>('api/Employees/' + id);
  }

  // createEmployee(employee: Employee): Observable<Employee> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',
  //     employee, httpOptions);
  // }
  // updateEmployee(employee: Employee): Observable<Employee> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',
  //     employee, httpOptions);
  // }
  // deleteEmployeeById(employeeid: string): Observable<number> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,
  //     httpOptions);
  // }

}
