import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';
import { CertifiedComponent } from './certified/certified.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TopHeaderComponent,
    ServicesComponent,
    CertifiedComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TopHeaderComponent,
    ServicesComponent,
    CertifiedComponent
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
})
export class SharedModule {}
