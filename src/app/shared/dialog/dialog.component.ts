import { tap } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DialogService } from './dialog.service';

interface Dialog {
  open: boolean;
  content?: any;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  dialog: Dialog = { open: false };

  @ViewChild('dialogSelector', { static: true })
  elDialog!: ElementRef<HTMLDialogElement>;

  constructor(private readonly _dialogService: DialogService) {}

  ngOnInit() {
    DialogService.dialog
      .pipe(
        tap((dialogConfig) => {
          this.dialog = dialogConfig;
          if (this.elDialog && this.dialog.open) {
            this.elDialog.nativeElement.showModal();
            document.body.style.overflow = 'hidden';
          } else {
            this.elDialog.nativeElement.close();
            document.body.style.overflow = '';
          }
        })
      )
      .subscribe();
  }

  closeDialog() {
    this._dialogService.closeDialog();
  }
}
