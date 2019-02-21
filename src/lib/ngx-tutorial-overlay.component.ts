import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-tutorial-overlay',
  template: '<div class="overlay">{{list | json}}</div>',
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
    }`]
})
export class NgxTutorialOverlayComponent implements OnInit {

  @Input() list: any[];

  constructor() { }

  ngOnInit() {
  }

}
