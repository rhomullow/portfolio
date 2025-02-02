import {
  Input,
  QueryList,
  Directive,
  ContentChildren,
  AfterContentInit,
} from '@angular/core';
import { startWith } from 'rxjs';

import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionItemHeaderComponent } from './accordion-item-header/accordion-item-header.component';

@Directive({
  selector: 'app-accordion',
  host: {
    class: 'accordion',
  },
})
export class AccordionDirective implements AfterContentInit {
  private _ownHeaders = new QueryList<AccordionItemHeaderComponent>();

  @Input() multiple: boolean = false;

  @ContentChildren(AccordionItemComponent)
  items!: QueryList<AccordionItemComponent>;

  @ContentChildren(AccordionItemHeaderComponent, { descendants: true })
  _headers!: QueryList<AccordionItemHeaderComponent>;

  ngAfterContentInit(): void {
    /* this._headers.changes
      .pipe(startWith(this._headers))
      .subscribe((headers: QueryList<AccordionItemHeaderComponent>) => {
        this._ownHeaders.reset(
          headers.filter((header) => {
            header.item === this;
          })
        );
        console.log(this._ownHeaders);
        this._ownHeaders.notifyOnChanges();
      }); */
  }
}
