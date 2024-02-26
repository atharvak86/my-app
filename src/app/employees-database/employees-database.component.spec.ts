import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDatabaseComponent } from './employees-database.component';

describe('EmployeesDatabaseComponent', () => {
  let component: EmployeesDatabaseComponent;
  let fixture: ComponentFixture<EmployeesDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesDatabaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
