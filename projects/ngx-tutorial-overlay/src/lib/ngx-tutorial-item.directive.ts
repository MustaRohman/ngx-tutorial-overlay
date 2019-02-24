import { Directive, Input, OnChanges } from '@angular/core';
import { ElementOption } from './ngx-tutorial-overlay.directive';

@Directive({
    selector: '[libTutorialItem]'
})
export class NgxTutorialItemDirective implements OnChanges {

    @Input() libTutorialItem: ElementOption;

    constructor() {
    }

    ngOnChanges() {
        console.log('NgxTutorialItemDirective', this.libTutorialItem);
    }
}
