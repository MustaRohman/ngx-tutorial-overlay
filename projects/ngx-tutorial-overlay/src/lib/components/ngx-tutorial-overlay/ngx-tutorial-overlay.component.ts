import { Component, OnInit, Input, ComponentRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
export interface ComponentOption {
  id: string;
  title: string;
  description: string;
  children?: ComponentOption[];
}

@Component({
  selector: 'lib-ngx-tutorial-overlay',
  templateUrl: './ngx-tutorial-overlay.component.html',
  styleUrls: ['./ngx-tutorial-overlay.component.scss']
})
export class NgxTutorialOverlayComponent implements OnInit, AfterViewInit, OnChanges {

  private _list: any[] = [];
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

  setList(newVal) {
    console.log('setList', newVal);
    this._list = newVal;
  }
  constructor() { }

  ngOnInit() {
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
    console.log(this._list);
  }

  onExitClick() {
    this.show = false;
    this.ref.destroy();
  }

}
