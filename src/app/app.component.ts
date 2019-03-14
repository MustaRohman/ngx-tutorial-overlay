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
  index = 0;
  @ViewChild('pageRoot') pageRoot: any;

  constructor(
    private ngxTutorial: NgxTutorialOverlayService
  ) {
  }

  ngAfterViewInit() {
    console.log(this.pageRoot);
    // this.ngxTutorial.create('pageRoot');
    // setInterval(() => {
    //   if (this.index < 4) {
    //     this.index++;
    //   } else {
    //     this.index = 0;
    //   }
    //   console.log(this.index);
    // }, 1000);
  }

}
