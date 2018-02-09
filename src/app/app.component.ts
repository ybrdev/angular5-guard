import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<div [ngClass] = "'parent-container'">
	  <router-outlet></router-outlet>
	</div>
  `
})
export class AppComponent {}
