import { Component, OnInit, Input, ComponentRef, ViewChild, AfterViewInit } from '@angular/core';
import { ComponentOption } from './ngx-tutorial-overlay.service';

@Component({
  selector: 'lib-ngx-tutorial-overlay',
  template: `
        <div #overlay class="overlay" [style.display]="show ? 'block' : 'none'">
          <button class="exit" (click)="onExitClick()">✖️</button>
          {{list | json}}
        </div>
    `,
  styles: [`.overlay {
         background-color: red; z-index: 15; position: absolute;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgba(0, 0, 0, 0.589);
    }`, `
      .exit {
        top: 0px;
        right: 0px;
        position: absolute;
        backgroud: rgba(0,0,0,0.5);
        font-size: 27px;
      }
    `]
})
export class NgxTutorialOverlayComponent implements OnInit, AfterViewInit {

  @Input() list: ComponentOption[];
  @Input() ref: ComponentRef<any>;
  @ViewChild('overlay') overlay: any;
  show = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const testNeighbourDiv = document.createElement('div');
    testNeighbourDiv.style.width = '200px';
    testNeighbourDiv.style.height = '200px';
    testNeighbourDiv.style.border = '2px dashed white';
    testNeighbourDiv.style.display = 'inline-block';
    testNeighbourDiv.style.position = 'relative';
    testNeighbourDiv.style.top = (451.6875 + 123.812)  + 'px';
    // testNeighbourDiv.style.left = 825.5 + 'px';
    testNeighbourDiv.style.zIndex = '25';
    console.log('left');

    this.overlay.nativeElement.appendChild(testNeighbourDiv);
  }

  onExitClick() {
    this.show = false;
    this.ref.destroy();
  }

}
