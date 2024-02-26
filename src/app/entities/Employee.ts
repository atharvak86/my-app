export class Employee
{
    eid:number
    fullName:string
    salary:number
    hire_Date:string
    address:string

    constructor(id:number, fname:string, sal:number, hDate:string, addr:string)
    {
        this.eid = id
        this.fullName = fname
        this.salary = sal
        this.hire_Date = hDate
        this.address = addr
    }
}