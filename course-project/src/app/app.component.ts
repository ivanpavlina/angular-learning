import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedNavItem: string;

  navItemSelected(selectedItem: string) {
    this.selectedNavItem = selectedItem;
  }
}
