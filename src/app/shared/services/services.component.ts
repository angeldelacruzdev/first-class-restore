import { Component } from '@angular/core';
import {
  faBuilding,
  faFire,
  faGlassWater,
  faDroplet,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  faBuilding = faBuilding;
  faFire = faFire;
  faGlassWater = faGlassWater;
  faDroplet = faDroplet;
}
