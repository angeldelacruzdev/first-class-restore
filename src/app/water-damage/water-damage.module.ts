import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterDamageComponent } from './water-damage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [WaterDamageComponent],
  exports: [WaterDamageComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class WaterDamageModule {}
