import { Component, OnInit } from '@angular/core';

import { Certificate } from './certificates';
import { CertificatesService } from './certificates.service';
import { DialogService } from './../../../../shared/dialog/dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  certificates$!: Observable<Certificate[]>;

  constructor(
    private readonly _dialogService: DialogService,
    private readonly _certificatesService: CertificatesService
  ) {}

  ngOnInit(): void {
    this.certificates$ = this._certificatesService.getCertificates();
  }

  openDetailsDialog(certificate: Certificate) {
    this._dialogService.openDialog('certificate', certificate);
  }
}
