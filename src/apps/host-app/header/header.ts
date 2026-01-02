import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBars, 
  faHome, 
  faInfoCircle, 
  faBriefcase, 
  faEnvelope,
  faUser,
  faRightToBracket
} from '@fortawesome/free-solid-svg-icons';
import { RouterLinkActive, RouterLinkWithHref, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLinkActive, RouterModule],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  // Icons
  faBars = faBars;
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faRightToBracket = faRightToBracket;
}