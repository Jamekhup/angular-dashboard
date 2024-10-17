import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuService } from '../../shared/menu.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, FontAwesomeModule, NgClass],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  isMenuOpen = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.isMenuOpen$.subscribe(isOpen => {
      this.isMenuOpen = isOpen;
    });
  }
}
