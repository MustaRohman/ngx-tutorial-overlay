import { NgModule } from '@angular/core';
import { NgxTutorialOverlayComponent } from './components/ngx-tutorial-overlay/ngx-tutorial-overlay.component';
import { NgxTutorialOverlayDirective } from './ngx-tutorial-overlay.directive';
import { CommonModule } from '@angular/common';
import { NgxTutorialItemDirective } from './ngx-tutorial-item.directive';
import { NgxTutorialOverlayItemComponent } from './components/ngx-tutorial-overlay-item/ngx-tutorial-overlay-item.component';

@NgModule({
  declarations: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective, NgxTutorialItemDirective, NgxTutorialOverlayItemComponent],
  entryComponents: [NgxTutorialOverlayComponent, NgxTutorialOverlayItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective, NgxTutorialItemDirective, NgxTutorialOverlayItemComponent]
})
export class NgxTutorialOverlayModule { }
