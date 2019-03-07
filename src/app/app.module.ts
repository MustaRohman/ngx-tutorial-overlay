import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxTutorialOverlayModule } from 'projects/ngx-tutorial-overlay/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxTutorialOverlayModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
