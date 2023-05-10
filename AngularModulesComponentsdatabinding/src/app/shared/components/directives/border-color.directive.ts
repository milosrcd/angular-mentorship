import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input() defaultValue?: string;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    console.log(this.defaultValue);
    if (this.defaultValue && this.defaultValue.trim().length !== 0) {
      (this.elementRef.nativeElement as HTMLInputElement).style.border = "3px solid green";
    } else {
      (this.elementRef.nativeElement as HTMLInputElement).style.border = "3px solid red";
    }
  }   // TODO
}
