import { Component } from '@angular/core';
import { Link } from './link/link.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor() {
    this.links = [
      new Link('Prueba', 'http://angular.io', 97),
      new Link('Pruebaaa', 'http://angular.io', 45),
      new Link('Prueba3333', 'http://angular.io', 67),
    ];
    console.log(this.links);
  }
  
  title: HTMLInputElement;
  link: HTMLInputElement;

  

  addLink(title, link){
    this.links.push(new Link(title.value, link.value))
    title.value ='';
    link.value ='';
    return false;
    
  }
}
