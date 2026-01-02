import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faRocket,
  faShieldAlt,
  faChartLine,
  faClock,
  faUsers,
  faCheckCircle,
  faStar,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  // Icons
  faRocket = faRocket;
  faShieldAlt = faShieldAlt;
  faChartLine = faChartLine;
  faClock = faClock;
  faUsers = faUsers;
  faCheckCircle = faCheckCircle;
  faStar = faStar;
  faArrowRight = faArrowRight;
}