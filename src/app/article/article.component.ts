import { Component } from '@angular/core';

@Component({
  template: `<h2>Welcome to Article Home</h2>
   <p>Find article <a routerLink="list" routerLinkActive="active">list</a></p>
	<div [ngClass] = "'child-container'">
	  <router-outlet></router-outlet>
	</div>
  `
})
export class ArticleComponent {}
