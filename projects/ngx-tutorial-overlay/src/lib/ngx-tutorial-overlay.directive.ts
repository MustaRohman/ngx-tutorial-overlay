// tslint:disable-next-line:max-line-length
import { Directive, ElementRef, ViewContainerRef, Component, ComponentFactory, ComponentFactoryResolver, Input, AfterViewInit, DoCheck, OnChanges, ViewChildren, ContentChild, ContentChildren, QueryList, Renderer2, OnInit } from '@angular/core';
import { NgxTutorialItemDirective } from './ngx-tutorial-item.directive';
import { NgxTutorialOverlayComponent } from './components/ngx-tutorial-overlay/ngx-tutorial-overlay.component';

export interface ElementOption {
    title: string;
    description: string;
    position: 'top' | 'bottom' | 'left' | 'right';
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
            //     // Get position of item
            //     // Place New component based on item...position
            //     // this.renderer.addClass(elem, '');
            if (this.index !== null) {
                this.currentHighlightedItem = childrenArr[this.index];
                const elem = this.currentHighlightedItem.el.nativeElement;
                this.highlightItem(elem);
                /**
                 * Place new parent div around highlighted item
                 * New div will contain original highlighed item PLUS new component with arrow and description
                 * Start simple: just display description
                 * New div will utilise Flex, with direction depending on highlighted item's ElementOption.position,
                 *  (left/right = row, up/down = col)
                 * Order of elements also depends on position
                 *  */

                const rect = this.getOffset(elem);
                console.log('rect', rect);

                this.compRef.instance.setList(['test']);
                console.log('compRef.listInput', this.compRef.instance.list);
                // const testNeighbourDiv = document.createElement('div');
                // testNeighbourDiv.style.width = '200px';
                // testNeighbourDiv.style.height = '200px';
                // testNeighbourDiv.style.border = '2px dashed white';
                // testNeighbourDiv.style.display = 'inline-block';
                // testNeighbourDiv.style.position = 'relative';
                // testNeighbourDiv.style.top = elem.offsetHeight + 'px';
                // testNeighbourDiv.style.zIndex = '25';
                // console.log('left');

                // const wrapper = document.createElement('div');
                // wrapper.style.border = '2px solid blue';
                // wrapper.style.width = 'auto';
                // wrapper.style.height = 'auto';
                // elem.parentNode.insertBefore(wrapper, elem);
                // wrapper.appendChild(elem);
                // wrapper.appendChild(testNeighbourDiv);

                // Maybe forget about placing a div around the highlightedItem.
                /**
                 * Get position of highlighted item in *WINDOW*
                 * And place the newly created tip element within the overlay, position relative to the highlighted item's position
                 */
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
