import { TestBed } from '@angular/core/testing';
import { DepartmentModule } from './department.module';

describe('DepartmentModule', () => {
  let pipe: DepartmentModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DepartmentModule] });
    pipe = TestBed.inject(DepartmentModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
