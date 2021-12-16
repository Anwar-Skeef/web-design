import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appListener]',
})
export class ListenerDirective {
  new: number;
  constructor(private el: ElementRef) {
    console.log(this.onResize());
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.new = window.innerWidth;
  }
}
