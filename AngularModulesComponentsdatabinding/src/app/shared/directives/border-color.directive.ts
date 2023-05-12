import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {
  @Input('appBorderColor') value!: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('keyup') onKeyUp() {
    if (this.value === '' || this.value.match(/\s+/g)){
      this.highlight('red');
    }else{
      this.highlight('green');
    }
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.borderColor = color;
    this.elementRef.nativeElement.style.borderStyle = 'solid';
    this.elementRef.nativeElement.style.borderWidth = '4px';
  }
}
