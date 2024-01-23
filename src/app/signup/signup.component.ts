import {
  Component,
  ElementRef,
  NgModule,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupService } from '../services/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private service: SignupService) {}
  isSubmitted: boolean = false;
  isCallingAPI: Boolean = false;
  ngOnInit(): void {}

  name: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  @ViewChild('textName') textName?: ElementRef;
  @ViewChild('textlastName') textlastName?: ElementRef;
  @ViewChild('textEmail') textEmail?: ElementRef;
  @ViewChild('textPassword') textPassword?: ElementRef;

  public sendForm() {
    this.isCallingAPI = true;
    this.isSubmitted = true;
    // this.name = this.textName?.nativeElement.value;
    // this.lastname = this.textlastName?.nativeElement.value;
    // this.email = this.textEmail?.nativeElement.value;
    // this.password = this.textPassword?.nativeElement.value;
    this.service
      .sendSignupForm({
        name: this.textName!.nativeElement.value,
        lastname: this.textlastName!.nativeElement.value,
        email: this.textEmail!.nativeElement.value,
        password: this.textPassword!.nativeElement.value
      })
      .subscribe(
        (Output) => {
          console.log('server massage: ', Output.message);
          alert(Output.message);
          this.isCallingAPI = false;
        },
        (error) => {
          console.log('server massage error: ', error);
          this.isCallingAPI = false;
        }
      );


  }

  // --------------------------
  public onLoginRedierect() {
    this.router.navigate(['/login']);
  }
}
