import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMosaicComponent } from './catalog-mosaic.component';

describe('CatalogMosaicComponent', () => {
  let component: CatalogMosaicComponent;
  let fixture: ComponentFixture<CatalogMosaicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogMosaicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
