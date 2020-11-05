import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]'
})
export class ArcEnCielDirective {

  colors = ['#a075ff', '#5075ff', '#a0ff75', '#ffff75', '#ff7575'];

  constructor() { }

  @HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keyup') onInputKeyUp(){
    this.backgroundColor = (this.colors)[Math.floor(Math.random() * 5)];
    this.borderColor = (this.colors)[Math.floor(Math.random() * 5)];
  }

}
