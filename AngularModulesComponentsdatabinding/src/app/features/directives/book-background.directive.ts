import { Category } from 'src/app/models/category.enum';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBookBackground]'
})
export class BookBackgroundDirective implements OnInit {
  @Input() category?: string;

  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    const categoryName = this.category?.replace('Category:', '');
    switch (categoryName) {
      case Category.Fantasy:
        this.elementRef.nativeElement.style.backgroundColor = "pink";
        this.elementRef.nativeElement.style.color = "white";
        break;
      case Category.General:
        this.elementRef.nativeElement.style.backgroundColor = "default";
        this.elementRef.nativeElement.style.color = "default";
        break;
      case Category.History:
        this.elementRef.nativeElement.style.backgroundColor = "white";
        this.elementRef.nativeElement.style.color = "default";
        break;
      case Category.Literary:
        this.elementRef.nativeElement.style.backgroundColor = "green";
        this.elementRef.nativeElement.style.color = "yellow";
        break;
    }
  }
}
