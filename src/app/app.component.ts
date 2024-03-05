import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SocialBarComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HitchCock HardScapes';
}
