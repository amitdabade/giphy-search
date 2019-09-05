import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerFooterComponent } from './lower-footer.component';

describe('LowerFooterComponent', () => {
  let component: LowerFooterComponent;
  let fixture: ComponentFixture<LowerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
