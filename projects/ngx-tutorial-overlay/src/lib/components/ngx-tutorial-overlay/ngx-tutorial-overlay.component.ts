import { Component, OnInit, Input, ComponentRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
export interface OverlayItemProperties {
  item: {
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

  labelWidth = 400;
  labelHeight = 100;
  spacing = 15;

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
    this._list = [...val];
  }
  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit', this._list);
  }

  calculateTopValue(overlayItemProp: OverlayItemProperties) {
    const itemValues = overlayItemProp.item;
    switch (overlayItemProp.position) {
      case 'below': {
        console.log(overlayItemProp.item.top + itemValues.offsetHeight + this.labelHeight + this.spacing);
        return itemValues.top + itemValues.offsetHeight + this.spacing;
      }
      default: {
        console.log('default');
        break;
      }
    }
  }

  calculateLeftValue(overlayItemProp: OverlayItemProperties) {
    const itemValues = overlayItemProp.item;
    switch (overlayItemProp.position) {
      case 'below': {
        return overlayItemProp.item.left + (itemValues.offsetWidth / 2) - (this.labelWidth / 2);
      }
      default: {
        console.log('default');
        break;
      }
    }
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
