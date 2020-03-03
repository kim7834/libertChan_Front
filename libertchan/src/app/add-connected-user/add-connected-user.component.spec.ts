import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConnectedUserComponent } from './add-connected-user.component';

describe('AddConnectedUserComponent', () => {
  let component: AddConnectedUserComponent;
  let fixture: ComponentFixture<AddConnectedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConnectedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConnectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
