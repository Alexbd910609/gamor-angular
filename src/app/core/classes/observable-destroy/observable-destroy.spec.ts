import {TestBed} from '@angular/core/testing';

import {ObservableDestroy} from "./observable-destroy";

describe('ObservableDestroy', () => {
  let service: ObservableDestroy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableDestroy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});