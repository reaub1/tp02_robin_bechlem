import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login : string = "totorina";
  
  valid : boolean = true;

  isValide() : boolean {
    return this.valid;
  }
  desactivation() {
    this.valid = false;
  }
}
