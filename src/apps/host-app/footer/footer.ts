import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  // Brand Icons
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  
  // Solid Icons
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faHeart = faHeart;
  
  currentYear = new Date().getFullYear();
}