import { TestBed } from '@angular/core/testing';

import { SelectedChannelService } from './selected-channel.service';

describe('SelectedChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedChannelService = TestBed.get(SelectedChannelService);
    expect(service).toBeTruthy();
  });
});
