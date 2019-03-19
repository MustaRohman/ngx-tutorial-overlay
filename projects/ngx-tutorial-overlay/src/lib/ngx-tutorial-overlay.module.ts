import { NgModule } from '@angular/core';
import { NgxTutorialOverlayComponent } from './components/ngx-tutorial-overlay/ngx-tutorial-overlay.component';
import { NgxTutorialOverlayDirective } from './ngx-tutorial-overlay.directive';
import { CommonModule } from '@angular/common';
import { NgxTutorialItemDirective } from './ngx-tutorial-item.directive';
import { NgxOverlayLabelComponent } from './components/ngx-overlay-label/ngx-overlay-label.component';
import { NgxOverlayArrowComponent } from './components/ngx-overlay-arrow/ngx-overlay-arrow.component';

const declarables = [
  NgxTutorialOverlayComponent,
  NgxTutorialOverlayDirective,
  NgxTutorialItemDirective,
  NgxOverlayLabelComponent,
  NgxOverlayArrowComponent
];

@NgModule({
  declarations: declarables,
  entryComponents: [NgxTutorialOverlayComponent, NgxOverlayLabelComponent],
  imports: [
    CommonModule
  ],
  exports: declarables
})
export class NgxTutorialOverlayModule { }
