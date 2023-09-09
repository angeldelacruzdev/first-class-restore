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
    this.title.setTitle("First Class Restore")

    // Establecer meta etiquetas
    this.meta.updateTag({ name: 'description', content: ' This company is dedicated to delivering top-notch services, as reflected in our name. We were founded by Kilian Rodriguez and John Tavarez.' });

    // Establecer Open Graph / Facebook meta etiquetas
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.firstclassrestore.com/' });
    // ... otros tags

    // Establecer Twitter meta etiquetas
    this.meta.updateTag({ property: 'twitter:card', content: '/assets/summary_large_image.png' });
    // ... otros tags

  }
}

