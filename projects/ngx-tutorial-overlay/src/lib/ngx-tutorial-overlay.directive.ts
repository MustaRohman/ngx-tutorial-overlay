// tslint:disable-next-line:max-line-length
import { Directive, ElementRef, ViewContainerRef, Component, ComponentFactory, ComponentFactoryResolver, Input, AfterViewInit, DoCheck, OnChanges, ViewChildren, ContentChild, ContentChildren, QueryList, Renderer2, OnInit } from '@angular/core';
import { NgxTutorialItemDirective } from './ngx-tutorial-item.directive';
import { NgxTutorialOverlayComponent, OverlayItemProperties } from './components/ngx-tutorial-overlay/ngx-tutorial-overlay.component';

export interface ElementOption {
    title: string;
    description: string;
    position: 'above' | 'below' | 'left' | 'right';
    children: ElementOption[];
}

@Directive({
    selector: '[libTutorialOverlay]'
})
export class NgxTutorialOverlayDirective implements OnInit, OnChanges, AfterViewInit {
    wrapper: HTMLDivElement;
    highlightedStyle = `
            position: relative;
            z-index: 25;
            background-color: white;
            border-radius: 10px;
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
    }

    ngOnInit() {
        Promise.resolve(null).then(() => {
            const compFactory = this.componentFactoryResolver.resolveComponentFactory(NgxTutorialOverlayComponent);
            this.compRef = this.viewContainerRef.createComponent(compFactory);
            console.log(this.el.nativeElement);

            this.compRef.instance.ref = this.compRef;

            const childrenArr = this.children.toArray();
            console.log('ngOnChanges.children', childrenArr);
            if (this.index !== null) {
                this.currentHighlightedItem = childrenArr[this.index];
                const elem = this.currentHighlightedItem.el.nativeElement;
                this.highlightItem(elem);
                const rect = this.getOffset(elem);
                console.log('rect', rect);
                const overlayItemProp: OverlayItemProperties = {
                    item: {
                        top: rect.top,
                        left: rect.left,
                        offsetHeight: elem.offsetHeight,
                        offsetWidth: elem.offsetWidth,
                    },
                    title: this.currentHighlightedItem.libTutorialItem.title,
                    position: this.currentHighlightedItem.libTutorialItem.position,
                    description: this.currentHighlightedItem.libTutorialItem.description
                };
                this.compRef.instance.setList([overlayItemProp]);
            }
        });
    }

    ngOnChanges() {
        if (this.children) {
            const childrenArr = this.children.toArray();
            if (this.index !== null) {
                this.currentHighlightedItem = childrenArr[this.index];
                const elem = this.currentHighlightedItem.el.nativeElement;
                const rect = elem.getBoundingClientRect();
                console.log(rect);
                this.highlightItem(elem);
                this.compRef.instance.list = ['test'];
                console.log(this.compRef.instance);
            }
        }
    }

    ngAfterViewInit() {
    }

    private highlightItem(elem) {
        this.renderer.setAttribute(elem, 'style', this.highlightedStyle);
    }

    private getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    }

}
