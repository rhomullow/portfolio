import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { FooterModule } from './core/footer/footer.module';
import { HeaderModule } from './core/header/header.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderModule, RouterOutlet, FooterModule, SharedModule],
})
export class AppComponent {
  title = 'portfolio';
}
