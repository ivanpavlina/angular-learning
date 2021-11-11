import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')
  isOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  /*@HostListener('click')
  onMouseClick(eventData: Event) {
    this.isOpen = !this.isOpen;
  }*/

  // Closing the Dropdown From Anywhere
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}
