import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';

describe('NgxTutorialOverlayComponent', () => {
  let component: NgxTutorialOverlayComponent;
  let fixture: ComponentFixture<NgxTutorialOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTutorialOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTutorialOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
