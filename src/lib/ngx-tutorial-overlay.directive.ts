import { Directive, ElementRef, ViewContainerRef, Component, ComponentFactory, ComponentFactoryResolver, Input } from '@angular/core';

@Component({
    template: '{{ test }}',
    selector: 'lib-test-component'
})
export class TestComponent {
    @Input() test = 'test';
}

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
        const compFactory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
        const compRef = viewContainerRef.createComponent(compFactory);
        compRef.instance.test = 'test input changed!';
        parent.prepend(this.wrapper);
        console.log(parent);
    }
}
