import { Component } from '@angular/core';
import { Employee } from '../entities/Employee';

@Component({
  selector: 'app-employees-database',
  templateUrl: './employees-database.component.html',
  styleUrl: './employees-database.component.css'
})
export class EmployeesDatabaseComponent {

  e1:Employee = new Employee(101, "Shyam Kumar", 11111, "12-07-2000", "Mathura") 
  e2:Employee = new Employee(102, "Ram Kumar", 22222, "11-11-2011", "Ayodhya") 
  e3:Employee = new Employee(103, "Ravi Kumar", 33333, "11-12-2012", "Konark") 
  e4:Employee = new Employee(104, "Vishnu Kumar", 99999, "01-11-1001", "Thiruvanathpuram") 
  e5:Employee = new Employee(105, "ABC XYZ", 9999, "04-07-2000", "Pune") 
  e6:Employee = new Employee(106, "LKL MVC", 8999, "08-09-1999", "Kolhapur") 
  e7:Employee = new Employee(107, "OLP PPP", 12344, "01-11-1001", "Nashik") 
  e8:Employee = new Employee(108, "ASD LDF", 1999, "01-01-2001", "Califoria") 
  e9:Employee = new Employee(109, "Kerr Pal", 7999, "10-10-2010", "Nanded") 
  e10:Employee = new Employee(110, "Away Go", 12122, "29-02-2024", "Mumbai") 

  empList:Employee []= [this.e1, this.e2, this.e3, this.e4, this.e5, this.e6, this.e7, this.e8, this.e9, this.e10] 

  // empList:Employee []= [new Employee(101, "Shyam Kumar", 11111, "12-07-2000", "Mathura"),
  //   new Employee(102, "Ram Kumar", 22222, "11-11-2011", "Ayodhya"),
  //   new Employee(103, "Ravi Kumar", 33333, "11-12-2012", "Konark")
  // ]
}
