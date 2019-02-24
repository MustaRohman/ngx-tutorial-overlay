import { Component, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { NgxTutorialOverlayService } from 'projects/ngx-tutorial-overlay/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-in-app-tutorial';
  wrapper: HTMLDivElement;
  list = ['input'];
  @ViewChild('pageRoot') pageRoot: any;

  constructor(
    private ngxTutorial: NgxTutorialOverlayService
  ) {
  }

  ngAfterViewInit() {
    console.log(this.pageRoot);
    // this.ngxTutorial.create('pageRoot');

  }

}
