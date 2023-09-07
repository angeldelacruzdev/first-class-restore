import { Component, Input } from '@angular/core';
import { faGlassWater } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() icon: any = faGlassWater;
  @Input() title: any;
  @Input() paragraph: any;
  @Input() link: any;
  
}
