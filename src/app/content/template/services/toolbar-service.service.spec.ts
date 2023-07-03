import { TestBed, inject } from '@angular/core/testing';

import { ToolbarServiceService } from './toolbar-service';

describe('ToolbarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarServiceService]
    });
  });

  it('should be created', inject([ToolbarServiceService], (service: ToolbarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
