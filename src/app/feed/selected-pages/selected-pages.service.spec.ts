/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectedPagesService } from './selected-pages.service';

describe('SelectedPagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedPagesService]
    });
  });

  it('should ...', inject([SelectedPagesService], (service: SelectedPagesService) => {
    expect(service).toBeTruthy();
  }));
});
