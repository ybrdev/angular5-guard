import { Component } from '@angular/core';
@Component({
  template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
		 <li><a routerLink="/article" routerLinkActive="active" >Article</a></li>
		 <li><a routerLink="/address" routerLinkActive="active">Address</a></li>
	  </ul>
	</nav>
	<logout></logout>
	<div [ngClass] = "'parent-container'">
	  <router-outlet></router-outlet>
	</div>
  `
})
export class DashboardLayoutComponent {}
