import { TestBed, inject } from '@angular/core/testing';

import { InvitesService } from './invites.service';

describe('InvitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitesService]
    });
  });

  it('should ...', inject([InvitesService], (service: InvitesService) => {
    expect(service).toBeTruthy();
  }));
});
