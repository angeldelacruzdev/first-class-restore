import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bio-recovery',
  templateUrl: './bio-recovery.component.html',
  styleUrls: ['./bio-recovery.component.scss'],
})
export class BioRecoveryComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'title',
      content: 'First Class Restore | Bio-Recovery (Biohazard Specialists)',
    });
    this.meta.addTag({ name: 'robots', content: 'follow' });
    this.meta.addTag({ name: 'author', content: 'John F Tavarez' });
    this.meta.addTag({
      name: 'keywords',
      content:
        'Water Damage,  Fire Restoration,  Industrial Cleanup, Odor Control,  Mold Remediation,   Bio-Recovery, Biohazard Specialists',
    });
    this.title.setTitle(
      'First Class Restore | Bio-Recovery (Biohazard Specialists)'
    );

    this.meta.updateTag({
      name: 'description',
      content: `Biohazard situations can pose severe risks to health and safety, requiring
      the expertise of trained professionals to safely and thoroughly clean and
      decontaminate affected areas.`,
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.firstclassrestore.com/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: `Biohazard situations can pose severe risks to health and safety, requiring
      the expertise of trained professionals to safely and thoroughly clean and
      decontaminate affected areas.`,
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
      content: `Biohazard situations can pose severe risks to health and safety, requiring
      the expertise of trained professionals to safely and thoroughly clean and
      decontaminate affected areas.`,
    });
    this.meta.updateTag({
      property: 'twitter:url',
      content: 'https://www.firstclassrestore.com/',
    });
  }
}
