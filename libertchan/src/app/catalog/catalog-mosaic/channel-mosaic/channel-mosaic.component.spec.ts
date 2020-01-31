import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelMosaicComponent } from './channel-mosaic.component';

describe('ChannelMosaicComponent', () => {
  let component: ChannelMosaicComponent;
  let fixture: ComponentFixture<ChannelMosaicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelMosaicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
