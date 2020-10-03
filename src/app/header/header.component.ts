import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarCollapsed: Boolean = true;
  dropdown: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleNavbarCollapsed(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  dropdownclick(){
    this.dropdown = !this.dropdown;
  }

}
