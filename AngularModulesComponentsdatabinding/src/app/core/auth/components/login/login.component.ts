import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/core/interfaces/register-form.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: '',
    role: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.form)
    .pipe(take(1))
    .subscribe((data: any) => {
      if(data.length){
        localStorage.setItem('logged_user', JSON.stringify(data[0]));
        this.router.navigateByUrl('/');
      }else{
        alert('You are not registered')
      }
    })
  }

}
