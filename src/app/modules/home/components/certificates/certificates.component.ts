import { DialogService } from './../../../../shared/dialog/dialog.service';
import { Component } from '@angular/core';

interface Certificate {
  type: 'training' | 'courses' | 'certifications';
  title: string;
  partner: string;
  description: string;
  file: string;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      type: 'training',
      title: 'AZ-900',
      partner: 'Microsoft',
      description: '',
      file: 'doc.png',
    },
  ];

  constructor(private readonly _dialogService: DialogService) {}

  openDetailsDialog(certificate: Certificate) {
    this._dialogService.openDialog(certificate);
  }
}
