import { Component, OnInit, Input, ComponentRef } from '@angular/core';
import { ComponentOption } from './ngx-tutorial-overlay.service';

@Component({
  selector: 'lib-ngx-tutorial-overlay',
  template: `
        <div class="overlay" [style.display]="show ? 'block' : 'none'">
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
export class NgxTutorialOverlayComponent implements OnInit {

  @Input() list: ComponentOption[];
  @Input() ref: ComponentRef<any>;
  show = true;

  constructor() { }

  ngOnInit() {
  }

  onExitClick() {
    this.show = false;
    this.ref.destroy();
  }

}
