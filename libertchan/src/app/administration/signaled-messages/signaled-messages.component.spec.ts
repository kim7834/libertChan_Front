import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaledMessagesComponent } from './signaled-messages.component';

describe('SignaledMessagesComponent', () => {
  let component: SignaledMessagesComponent;
  let fixture: ComponentFixture<SignaledMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaledMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignaledMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
