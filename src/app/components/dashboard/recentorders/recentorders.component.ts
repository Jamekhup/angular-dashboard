import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recentorders',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './recentorders.component.html',
  styles: ``
})
export class RecentordersComponent {
  faLocationDot=faLocationDot;
  faCircleCheck=faCircleCheck;
  faCircleXmark=faCircleXmark;
}
