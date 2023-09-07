import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WaterDamageComponent } from './water-damage/water-damage.component';
import { FireRestorationComponent } from './fire-restoration/fire-restoration.component';
import { IndustrialCleanupComponent } from './industrial-cleanup/industrial-cleanup.component';
import { OdorControlComponent } from './odor-control/odor-control.component';
import { MoldRemediationComponent } from './mold-remediation/mold-remediation.component';
import { BioRecoveryComponent } from './bio-recovery/bio-recovery.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    children: [
      {
        path: 'water-damage',
        component: WaterDamageComponent,
      },
      {
        path: 'fire-restoration',
        component: FireRestorationComponent,
      },
      {
        path: 'industrial-cleanup',
        component: IndustrialCleanupComponent,
      },
      {
        path: 'odor-control',
        component: OdorControlComponent,
      },
      {
        path: 'mold-remediation',
        component: MoldRemediationComponent,
      },
      {
        path: 'bio-recovery',
        component: BioRecoveryComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
