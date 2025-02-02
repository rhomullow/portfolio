import { Component, Host, ViewEncapsulation } from '@angular/core';

import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'accordion__item__header',
    '(click)': '_toggle()',
  },
})
export class AccordionItemHeaderComponent {
  constructor(@Host() public item: AccordionItemComponent) {}

  _toggle() {
    this.item.toggle();
  }
}
