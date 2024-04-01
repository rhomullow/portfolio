import { EventEmitter, Injectable } from '@angular/core';

import { DialogType } from './dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor() {}

  static dialog = new EventEmitter();

  openDialog(type: DialogType, content: any) {
    DialogService.dialog.emit({ open: true, type, content });
  }

  closeDialog() {
    DialogService.dialog.emit({ open: false });
  }
}
