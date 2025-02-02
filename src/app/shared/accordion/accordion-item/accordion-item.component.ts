import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'accordion__item',
  },
})
export class AccordionItemComponent {
  expanded = false;

  constructor() {}

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
