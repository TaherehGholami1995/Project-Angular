import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './app.routes';
import { FrontendComponent } from './frontend/frontend.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    RouterOutlet,
    RouterLink,
    FrontendComponent,
    ArticlesComponent,
    AboutComponent,
    LoginComponent,
    NotfoundComponent,
    SignupComponent,
    HttpClientModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Project-Angular';
}
