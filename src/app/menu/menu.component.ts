import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  showMenu: boolean = false;
  constructor() {}

  showMenuForSmartphones() {
    if (this.showMenu === false) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
}
