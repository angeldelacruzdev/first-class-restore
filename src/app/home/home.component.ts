import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public fruitList: any = [];

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.meta.addTag({ name: "title", content: "First Class Restore" });
    this.meta.addTag({ name: "robots", content: "follow" });
    this.meta.addTag({ name: "author", content: "John F Tavarez" });
    this.meta.addTag({ name: "keywords", content: "  Water Damage,  Fire Restoration,  Industrial Cleanup, Odor Control,  Mold Remediation,   Bio-Recovery" });
    this.title.setTitle("First Class Restore")

    this.meta.updateTag({ name: 'description', content: 'This company is dedicated to delivering top-notch services, as reflected in our name. We were founded by Kilian Rodriguez and John Tavarez.' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.firstclassrestore.com/' });
    this.meta.updateTag({ property: 'og:description', content: 'This company is dedicated to delivering top-notch services, as reflected in our name. We were founded by Kilian Rodriguez and John Tavarez.' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/summary_large_image.png' });
 
    this.meta.updateTag({ property: 'twitter:card', content: '/assets/summary_large_image.png' });
    this.meta.updateTag({ property: 'twitter:title', content: 'First Class Restore' });
    this.meta.updateTag({ property: 'twitter:url', content: 'https://www.firstclassrestore.com/' });
  }
}

