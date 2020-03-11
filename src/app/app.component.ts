import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngularCRUDDemo';
  products = [] as object;
  employee =  Employee;
  testMessage$: Observable<string>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
    this.getOneEmployee();
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  getOneEmployee() {
    this.employeeService.getEmployeeById('2').subscribe(data => {
      console.log(data);
    });
  }

}
