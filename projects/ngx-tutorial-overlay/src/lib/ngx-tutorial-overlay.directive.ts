// tslint:disable-next-line:max-line-length
import { Directive, ElementRef, ViewContainerRef, Component, ComponentFactory, ComponentFactoryResolver, Input, AfterViewInit, DoCheck, OnChanges, ViewChildren, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';
import { NgxTutorialItemDirective } from './ngx-tutorial-item.directive';
import { Content } from '@angular/compiler/src/render3/r3_ast';

export interface ElementOption {
    id: string;
    title: string;
    description: string;
    children: ElementOption[];
}

@Directive({
    selector: '[libTutorialOverlay]'
})
export class NgxTutorialOverlayDirective implements OnChanges, AfterViewInit {
    wrapper: HTMLDivElement;
    @Input() libTutorialOverlay: ElementOption[] = [];
    compRef: any;
    @ContentChildren(NgxTutorialItemDirective) children: QueryList<NgxTutorialItemDirective>;

    constructor(
        private el: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory(NgxTutorialOverlayComponent);
        this.compRef = this.viewContainerRef.createComponent(compFactory);
        const elem = el.nativeElement;
        console.log(elem);

        console.log(this.libTutorialOverlay);
        this.compRef.instance.ref = this.compRef;
    }

    ngOnChanges() {
        console.log('ngOnChanges', this.libTutorialOverlay);
        this.compRef.instance.list = this.libTutorialOverlay;
    }

    ngAfterViewInit() {
        console.log('ngOnChanges.children', this.children.toArray());
    }

}
