import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import {
  SignupInterface,
  SignupFeedbackInterface,
} from '../models/signup-form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  // api: string = 'https://angular-test.free.beeceptor.com/api/contact-form';

  api: string = 'https://tahereh.free.beeceptor.com/api/contact-form';

  constructor(private http: HttpClient) {}

  sendSignupForm(data: SignupInterface): Observable<SignupFeedbackInterface> {
    return this.http.post(
      this.api,
      data
    ) as Observable<SignupFeedbackInterface>;
  }
}



// api 
// {
//   "message": "successfully registered"
// }