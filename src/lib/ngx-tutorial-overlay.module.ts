import { NgModule } from '@angular/core';
import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';
import { NgxTutorialOverlayDirective } from './ngx-tutorial-overlay.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective,  ],
  entryComponents: [NgxTutorialOverlayComponent ],
  imports: [
    CommonModule
  ],
  exports: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective]
})
export class NgxTutorialOverlayModule { }
