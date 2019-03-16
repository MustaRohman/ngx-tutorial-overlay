import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'lib-ngx-overlay-label',
  templateUrl: './ngx-overlay-label.component.html',
  styleUrls: ['./ngx-overlay-label.component.scss']
})
export class NgxOverlayLabelComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() position: 'above' | 'below' | 'left' | 'right';
  @Input() set top(value: number) {
    console.log('OverlayLabel.top', value);
    this._top = value;
  }
  @Input() set left(value: number) {
    console.log('OverlayLabel.left', value);
    this._left = value;
  }

  _title: string;
  _description: string;
  _position: 'above' | 'below' | 'left' | 'right';
  _top: number;
  _left: number;

  constructor() { }

  ngOnInit() {
  }

}
