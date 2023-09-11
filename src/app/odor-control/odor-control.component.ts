import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-odor-control',
  templateUrl: './odor-control.component.html',
  styleUrls: ['./odor-control.component.scss'],
})
export class OdorControlComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'title',
      content: 'First Class Restore | Odor Control',
    });
    this.meta.addTag({ name: 'robots', content: 'follow' });
    this.meta.addTag({ name: 'author', content: 'John F Tavarez' });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Water Damage,  Fire Restoration,  Industrial Cleanup, Odor Control,  Mold Remediation,   Bio-Recovery',
    });
    this.title.setTitle('First Class Restore | Odor Control');

    this.meta.updateTag({
      name: 'description',
      content:
        'Unpleasant odors can impact the comfort and ambiance of any space. At First Class, we specialize in effective odor control solutions that go beyond masking odors.',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.firstclassrestore.com/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Unpleasant odors can impact the comfort and ambiance of any space. At First Class, we specialize in effective odor control solutions that go beyond masking odors.',
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
        'Unpleasant odors can impact the comfort and ambiance of any space. At First Class, we specialize in effective odor control solutions that go beyond masking odors.',
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: 'https://www.firstclassrestore.com/',
    });
  }
}
