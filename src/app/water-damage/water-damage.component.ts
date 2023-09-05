import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-water-damage',
  templateUrl: './water-damage.component.html',
  styleUrls: ['./water-damage.component.scss'],
})
export class WaterDamageComponent implements OnInit {
  constructor(private meta: Meta, private tile: Title) {}

  ngOnInit(): void {
    this.meta.addTag({ name: 'title', content: 'First Class Restore' });
    this.tile.setTitle('First Class  | Water Damge');
  }
}
