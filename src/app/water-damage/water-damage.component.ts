import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-water-damage',
  templateUrl: './water-damage.component.html',
  styleUrls: ['./water-damage.component.scss'],
})
export class WaterDamageComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'title',
      content: 'First Class Restore | Water Damage Restoration',
    });
    this.meta.addTag({ name: 'robots', content: 'follow' });
    this.meta.addTag({ name: 'author', content: 'John F Tavarez' });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Water Damage,  Fire Restoration,  Industrial Cleanup, Odor Control,  Mold Remediation,   Bio-Recovery',
    });
    this.title.setTitle('First Class Restore | Water Damage Restoration');

    this.meta.updateTag({
      name: 'description',
      content:
        'Water damage can strike suddenly, causing significant stress and disruption. At First Class, we understand the importance of swift action.',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.firstclassrestore.com/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Water damage can strike suddenly, causing significant stress and disruption. At First Class, we understand the importance of swift action.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: '/assets/summary_large_image.png',
    });

    this.meta.updateTag({
      property: 'twitter:card',
      content: '/assets/summary_large_image.png',
    });
    this.meta.updateTag({
      property: 'twitter:title',
      content: 'First Class Restore',
    });
    this.meta.updateTag({
      property: 'twitter:description',
      content:
        'Water damage can strike suddenly, causing significant stress and disruption. At First Class, we understand the importance of swift action.',
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: 'https://www.firstclassrestore.com/',
    });
  }
}
