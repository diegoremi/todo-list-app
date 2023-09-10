import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authServiceService: AuthServiceService){

  }

  public loginWithGoogle() {
    this.authServiceService.signInWithGoogle()
  }
}
