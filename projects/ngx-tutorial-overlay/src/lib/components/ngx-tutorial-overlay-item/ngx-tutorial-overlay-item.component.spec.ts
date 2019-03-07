import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTutorialOverlayItemComponent } from './ngx-tutorial-overlay-item.component';

describe('NgxTutorialOverlayItemComponent', () => {
  let component: NgxTutorialOverlayItemComponent;
  let fixture: ComponentFixture<NgxTutorialOverlayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTutorialOverlayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTutorialOverlayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
