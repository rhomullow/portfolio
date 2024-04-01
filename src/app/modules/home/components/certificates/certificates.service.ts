import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Certificate, certificateMockList } from './certificates';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  certificateList = certificateMockList;

  constructor() {}

  getCertificates(): Observable<Certificate[]> {
    return of(this.certificateList);
  }
}
