import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSwitchComponent } from './catalog-switch.component';

describe('CatalogSwitchComponent', () => {
  let component: CatalogSwitchComponent;
  let fixture: ComponentFixture<CatalogSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
