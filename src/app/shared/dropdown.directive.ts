import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';


@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    
    //work for bootstrap 3.5 and below 
    // @HostBinding('class.show') isOpen =false;

    // @HostListener('click') 
    // toggleOpen(){
    //     this.isOpen=!this.isOpen;

    //     console.log(" isOpen "+this.isOpen);
    // }  

    constructor(private elementRef:ElementRef,private renderer:Renderer2){

    }


    @HostListener('document:click',['$event'])
    toggleOpen(eventData:Event) {

    
        if(this.elementRef.nativeElement.contains(event.target)){

            if (this.elementRef.nativeElement.classList.contains('show')) {
                this.renderer.removeClass(this.elementRef.nativeElement, 'show');
                this.renderer.setAttribute(this.elementRef.nativeElement.childNodes[0], 'aria-expanded', 'false')
                this.renderer.removeClass(this.elementRef.nativeElement.childNodes[1], 'show')
    
            } else {
                this.renderer.addClass(this.elementRef.nativeElement, 'show')
                this.renderer.setAttribute(this.elementRef.nativeElement.childNodes[0], 'aria-expanded', 'true')
                this.renderer.addClass(this.elementRef.nativeElement.childNodes[1], 'show')
            }
        }else{
            this.renderer.removeClass(this.elementRef.nativeElement, 'show');
            this.renderer.setAttribute(this.elementRef.nativeElement.childNodes[0], 'aria-expanded', 'false')
            this.renderer.removeClass(this.elementRef.nativeElement.childNodes[1], 'show')
        }

    } 



}