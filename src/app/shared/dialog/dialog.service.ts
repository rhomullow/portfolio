import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor() {}

  static dialog = new EventEmitter();

  openDialog(content: any) {
    DialogService.dialog.emit({ open: true, content });
  }

  closeDialog() {
    DialogService.dialog.emit({ open: false });
  }
}
