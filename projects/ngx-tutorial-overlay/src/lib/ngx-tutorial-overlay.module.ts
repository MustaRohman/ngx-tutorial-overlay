import { NgModule } from '@angular/core';
import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';
import { NgxTutorialOverlayDirective } from './ngx-tutorial-overlay.directive';
import { CommonModule } from '@angular/common';
import { NgxTutorialItemDirective } from './ngx-tutorial-item.directive';

@NgModule({
  declarations: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective,  NgxTutorialItemDirective],
  entryComponents: [NgxTutorialOverlayComponent ],
  imports: [
    CommonModule
  ],
  exports: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective, NgxTutorialItemDirective]
})
export class NgxTutorialOverlayModule { }
