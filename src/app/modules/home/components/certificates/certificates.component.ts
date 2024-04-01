import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Certificate } from './certificates';
import { CertificatesService } from './certificates.service';
import { DialogService } from './../../../../shared/dialog/dialog.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  initialFilter = ['certifications', 'courses', 'training'];
  actualFilter = [...this.initialFilter];
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

  changeFilter(type: 0 | 1 | 2 | 3) {
    if (type === 0) {
      this.actualFilter = this.initialFilter;
    }
    if (type === 1) {
      this.actualFilter = [this.initialFilter[0]];
    }
    if (type === 2) {
      this.actualFilter = [this.initialFilter[1]];
    }
    if (type === 3) {
      this.actualFilter = [this.initialFilter[2]];
    }
  }
}
