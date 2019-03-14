import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOverlayLabelComponent } from './ngx-overlay-label.component';

describe('NgxOverlayLabelComponent', () => {
  let component: NgxOverlayLabelComponent;
  let fixture: ComponentFixture<NgxOverlayLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOverlayLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOverlayLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
