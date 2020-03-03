import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbToastComponent } from './ngb-toast.component';

describe('NgbToastComponent', () => {
  let component: NgbToastComponent;
  let fixture: ComponentFixture<NgbToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
