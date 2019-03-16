import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-overlay-label',
  templateUrl: './ngx-overlay-label.component.html',
  styleUrls: ['./ngx-overlay-label.component.scss']
})
export class NgxOverlayLabelComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() position: 'above' | 'below' | 'left' | 'right';
  @Input() top: number;
  @Input() left: number;

  constructor() { }

  ngOnInit() {
  }

}
