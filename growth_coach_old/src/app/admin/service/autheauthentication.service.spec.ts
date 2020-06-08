import { TestBed } from '@angular/core/testing';

import { AutheauthenticationService } from './autheauthentication.service';

describe('AutheauthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutheauthenticationService = TestBed.get(AutheauthenticationService);
    expect(service).toBeTruthy();
  });
});
