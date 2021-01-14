import { TestBed } from '@angular/core/testing';

import { ApiForumService } from './api-forum.service';

describe('ApiForumService', () => {
  let service: ApiForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
