import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrComponentComponent } from './str-component.component';

describe('StrComponentComponent', () => {
  let component: StrComponentComponent;
  let fixture: ComponentFixture<StrComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
