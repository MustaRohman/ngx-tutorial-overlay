import { Directive, ElementRef, ViewContainerRef, Component, ComponentFactory, ComponentFactoryResolver, Input } from '@angular/core';
import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';

@Directive({
    selector: '[libTutorialOverlay]'
})
export class NgxTutorialOverlayDirective {
    wrapper: HTMLDivElement;

    constructor(
        private el: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory(NgxTutorialOverlayComponent);
        const compRef = viewContainerRef.createComponent(compFactory);
        compRef.instance.list = [{test: 'test'}];
        compRef.instance.ref = compRef;
    }
}
