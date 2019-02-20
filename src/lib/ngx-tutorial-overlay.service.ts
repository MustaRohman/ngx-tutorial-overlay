import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxTutorialOverlayService {
  wrapper: HTMLDivElement;
  @ViewChild('pageRoot') pageRoot: any;

  constructor() { }

  create(rootId: string) {
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
    console.log(rootId);
    const element = document.getElementById(rootId);
    const parent = element.parentElement;
    parent.prepend(this.wrapper);
    console.log(parent);
  }

  show() {
    this.wrapper.style.display = 'block';
  }

  hide() {
    this.wrapper.style.display = 'none';
  }

  destroy() {
    this.wrapper.remove();
  }
}
