import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faRocket,
  faShieldAlt,
  faChartLine,
  faClock,
  faUsers,
  faCheckCircle,
  faStar
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-body',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './page-body.html',
})
export class PageBody {
  // Icons
  faRocket = faRocket;
  faShieldAlt = faShieldAlt;
  faChartLine = faChartLine;
  faClock = faClock;
  faUsers = faUsers;
  faCheckCircle = faCheckCircle;
  faStar = faStar;
}