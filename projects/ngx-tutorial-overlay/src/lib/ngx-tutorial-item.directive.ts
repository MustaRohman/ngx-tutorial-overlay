import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import { ElementOption } from './ngx-tutorial-overlay.directive';

@Directive({
    selector: '[libTutorialItem]'
})
export class NgxTutorialItemDirective implements OnChanges {

    @Input() libTutorialItem: ElementOption;

    constructor(
        public el: ElementRef,
    ) {
    }

    ngOnChanges() {
    }
}
