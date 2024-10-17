import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass,faMicrophone, faEnvelopeOpen,faBell,faAngleDown,faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../../shared/menu.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './topbar.component.html',
  styles: ``
})
export class TopbarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faMicrophone=faMicrophone;
  faEnvelopeOpen=faEnvelopeOpen;
  faBell = faBell;
  faAngleDown=faAngleDown;
  faBars=faBars;

  constructor(private menuService: MenuService) {}

  onMenuClick() {
    this.menuService.toggleMenu();
  }
}
