import { TestBed } from '@angular/core/testing';

import { ServiceCRUDService } from './service-crud.service';

describe('ServiceCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCRUDService = TestBed.get(ServiceCRUDService);
    expect(service).toBeTruthy();
  });
});
