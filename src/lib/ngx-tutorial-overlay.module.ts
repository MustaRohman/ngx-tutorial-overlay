import { NgModule } from '@angular/core';
import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';
import { NgxTutorialOverlayDirective, TestComponent } from './ngx-tutorial-overlay.directive';

@NgModule({
  declarations: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective, TestComponent],
  entryComponents: [TestComponent],
  imports: [
  ],
  exports: [NgxTutorialOverlayComponent, NgxTutorialOverlayDirective]
})
export class NgxTutorialOverlayModule { }
