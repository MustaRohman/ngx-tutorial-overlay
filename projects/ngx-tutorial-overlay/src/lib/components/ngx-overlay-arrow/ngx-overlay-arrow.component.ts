import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-overlay-arrow',
    templateUrl: './ngx-overlay-arrow.component.html',
    styleUrls: ['./ngx-overlay-arrow.component.scss'],
})
export class NgxOverlayArrowComponent {
    @Input() width = '360px';
    @Input() height = '480px';

    @Input() set position(value: 'left' | 'right' | 'above' | 'below') {
        console.log('NgxOverlayArrowComponent.position');
        switch (value) {
            case 'left': {
                this.transformation = '';
                break;
            }
            case 'right': {
                this.transformation = 'scale(-1, 1)';
                break;
            }
            case 'above': {
                this.transformation = 'rotate(90)';
                break;
            }
            case 'below': {
                this.transformation = 'rotate(-90)';
                break;
            }
        }
    }

    @Input() arrowColor = '#ffffff';

    transformation = '';
    constructor() {

    }
}
