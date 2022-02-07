import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplopyeeListComponent } from './emplopyee-list.component';

describe('EmplopyeeListComponent', () => {
  let component: EmplopyeeListComponent;
  let fixture: ComponentFixture<EmplopyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplopyeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplopyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
