import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 @Input() navbarclass!:string
  constructor() { }
  
}
