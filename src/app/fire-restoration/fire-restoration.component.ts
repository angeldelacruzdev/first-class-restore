import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fire-restoration',
  templateUrl: './fire-restoration.component.html',
  styleUrls: ['./fire-restoration.component.scss'],
})
export class FireRestorationComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'title',
      content: 'First Class Restore | Fire Restoration',
    });
    this.meta.addTag({ name: 'robots', content: 'follow' });
    this.meta.addTag({ name: 'author', content: 'John F Tavarez' });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Water Damage,  Fire Restoration,  Industrial Cleanup, Odor Control,  Mold Remediation,   Bio-Recovery',
    });
    this.title.setTitle('First Class Restore | Fire Restoration');

    this.meta.updateTag({
      name: 'description',
      content: `Fires can be devastating, leaving behind a trail of destruction and despair.
      At First Class, we specialize in expert fire restoration services that go
      beyond rebuilding spaces.`,
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.firstclassrestore.com/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: `Fires can be devastating, leaving behind a trail of destruction and despair.
      At First Class, we specialize in expert fire restoration services that go
      beyond rebuilding spaces.`,
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
      content: `Fires can be devastating, leaving behind a trail of destruction and despair.
      At First Class, we specialize in expert fire restoration services that go
      beyond rebuilding spaces.`,
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: 'https://www.firstclassrestore.com/',
    });
  }
}
