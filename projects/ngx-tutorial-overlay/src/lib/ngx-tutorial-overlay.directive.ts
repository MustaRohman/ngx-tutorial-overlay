// tslint:disable-next-line:max-line-length
import { Directive, ElementRef, ViewContainerRef, Component, ComponentFactory, ComponentFactoryResolver, Input, AfterViewInit, DoCheck, OnChanges } from '@angular/core';
import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';

export interface ElementOption {
    id: string;
    title: string;
    description: string;
    children: ElementOption[];
}

@Directive({
    selector: '[libTutorialOverlay]'
})
export class NgxTutorialOverlayDirective implements OnChanges {
    wrapper: HTMLDivElement;
    @Input() libTutorialOverlay: ElementOption[] = [];
    compRef: any;

    constructor(
        private el: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory(NgxTutorialOverlayComponent);
        this.compRef = this.viewContainerRef.createComponent(compFactory);
        console.log(this.libTutorialOverlay);
        this.compRef.instance.ref = this.compRef;
    }

    ngOnChanges() {
        console.log('ngOnChanges', this.libTutorialOverlay);
        this.compRef.instance.list = this.libTutorialOverlay;
    }

}
