import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-main-page',
  imports: [Header, Footer, RouterModule],
  templateUrl: './main-page.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {}
