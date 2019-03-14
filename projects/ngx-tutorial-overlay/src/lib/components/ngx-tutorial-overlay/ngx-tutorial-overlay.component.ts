import { Component, OnInit, Input, ComponentRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
export interface OverlayItemProperties {
  tutorialItem: {
    left: number;
    top: number;
    offsetHeight: number;
    offsetWidth: number;
  };
  position: 'above' | 'below' | 'left' | 'right';
  title: string;
  description: string;
}

@Component({
  selector: 'lib-ngx-tutorial-overlay',
  templateUrl: './ngx-tutorial-overlay.component.html',
  styleUrls: ['./ngx-tutorial-overlay.component.scss']
})
export class NgxTutorialOverlayComponent implements OnInit, AfterViewInit, OnChanges {

  private _list: OverlayItemProperties[] = [];
  get list(): any[] {return this._list; }
  set list(newVal: any[]) {
    if (newVal === this._list) {
      console.log('NgxTutorialOverlayComponent.setList', this._list);
      this._list = newVal;
    }
  }


  @Input() ref: ComponentRef<any>;
  @ViewChild('overlay') overlay: any;
  show = true;

  setList(val: any[]) {
    console.log('setList', val);
    const newVal = [...val];
    this._list = [...val];
  }
  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit', this._list);
  }

  ngAfterViewInit() {
    // const testNeighbourDiv = document.createElement('div');
    // testNeighbourDiv.style.width = '300px';
    // testNeighbourDiv.style.height = '300px';
    // testNeighbourDiv.style.border = '2px dashed white';
    // testNeighbourDiv.style.display = 'inline-block';
    // testNeighbourDiv.style.position = 'relative';
    // testNeighbourDiv.style.top = (451.6875 + 123.812)  + 'px';
    // testNeighbourDiv.style.margin = '7px';
    // // testNeighbourDiv.style.left = 825.5 + 'px';
    // testNeighbourDiv.style.zIndex = '25';
    // console.log('left');

    // this.overlay.nativeElement.appendChild(testNeighbourDiv);
  }

  ngOnChanges() {
  }

  onExitClick() {
    this.show = false;
    this.ref.destroy();
  }

}
