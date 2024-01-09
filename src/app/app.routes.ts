import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', component: FrontendComponent },
  { path: 'frontend', component: FrontendComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign', component: SignupComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
