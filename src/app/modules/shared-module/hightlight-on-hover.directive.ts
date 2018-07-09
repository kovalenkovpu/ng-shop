import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHightlightOnHover]'
})
export class HightlightOnHoverDirective {
    @Input('appHightlightOnHover') color: string;
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.color || 'grey');
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}
