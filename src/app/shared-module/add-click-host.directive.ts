import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAddClickHost]'
})
export class AddClickHostDirective {
    @Input('appAddClickHost') size: string;
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.sizeChange(this.size || `20px`);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.sizeChange(`12`);
    }

    private sizeChange(size: string) {
        console.log(`${size}px`);
        this.el.style.fontSize = `${size}px`;
    }
}
