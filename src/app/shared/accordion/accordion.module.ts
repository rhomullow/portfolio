import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionDirective } from './accordion.directive';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionItemHeaderComponent } from './accordion-item-header/accordion-item-header.component';

@NgModule({
  declarations: [
    AccordionDirective,
    AccordionItemComponent,
    AccordionItemHeaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    AccordionDirective,
    AccordionItemComponent,
    AccordionItemHeaderComponent,
  ],
})
export class AccordionModule {}
