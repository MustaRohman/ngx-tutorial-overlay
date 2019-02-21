import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[libTutorialOverlay]'
})
export class NgxTutorialOverlayDirective {
    wrapper: HTMLDivElement;

    constructor(private el: ElementRef, private viewContainerRef: ViewContainerRef) {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('style', `
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
        `);
        const parent = this.el.nativeElement.parentElement;
        parent.prepend(this.wrapper);
        console.log(parent);
    }
}
