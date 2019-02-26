// tslint:disable-next-line:max-line-length
import { Directive, ElementRef, ViewContainerRef, Component, ComponentFactory, ComponentFactoryResolver, Input, AfterViewInit, DoCheck, OnChanges, ViewChildren, ContentChild, ContentChildren, QueryList, Renderer2 } from '@angular/core';
import { NgxTutorialOverlayComponent } from './ngx-tutorial-overlay.component';
import { NgxTutorialItemDirective } from './ngx-tutorial-item.directive';
import { Content } from '@angular/compiler/src/render3/r3_ast';

export interface ElementOption {
    title: string;
    description: string;
    position: 'top' | 'bottom' | 'left' | 'right';
    children: ElementOption[];
}

@Directive({
    selector: '[libTutorialOverlay]'
})
export class NgxTutorialOverlayDirective implements OnChanges, AfterViewInit {
    wrapper: HTMLDivElement;
    highlightedStyle = `
            position: relative;
            z-index: 25;
            background-color: white;
            border-radius: 10px;
            padding: 2px
        `;
    @Input() libTutorialOverlay: ElementOption[] = [];
    @Input() index = 0;
    @ContentChildren(NgxTutorialItemDirective) children: QueryList<NgxTutorialItemDirective>;

    _index = 0;
    compRef: any;
    currentHighlightedItem: NgxTutorialItemDirective;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
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

        // this.currentHighlightedItem.
        if (this.children) {
            const childrenArr = this.children.toArray();
            if (this.index !== null) {
                const elem = childrenArr[this.index].el.nativeElement;
                this.highlightItem(elem);
            }
        }
    }

    ngAfterViewInit() {
        const childrenArr = this.children.toArray();
        console.log('ngOnChanges.children', childrenArr);
        //     // Get position of item
        //     // Place New component based on item...position
        //     // this.renderer.addClass(elem, '');
        if (this.index !== null) {
            this.currentHighlightedItem = childrenArr[this.index];
            const elem = this.currentHighlightedItem.el.nativeElement;
            this.highlightItem(elem);
        }
    }

    private highlightItem(elem) {
        this.renderer.setAttribute(elem, 'style', this.highlightedStyle);
    }

}
