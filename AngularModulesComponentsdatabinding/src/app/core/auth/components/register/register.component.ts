import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Countries } from 'src/app/core/interfaces/countries.interface';
import { CountryService } from '../../services/country.service';
import { AuthService } from '../../services/auth.service';
import { RegisterForm } from 'src/app/core/interfaces/register-form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^.{8,}$/)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern(/^.{8,}$/)]),
    countries: new FormControl('', Validators.required),
  });

  countryList: Countries[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(private countryService: CountryService, private authService: AuthService, private router: Router) { }

  onSubmit() {
    const formData = this.profileForm.value as RegisterForm;
    console.log(this.profileForm);
    const user: RegisterForm = {
      ...formData,
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      password: formData.password || '',
      confirmPassword: formData.confirmPassword || '',
      countries: formData.countries || '',
      role: 'user'
    };
    this.authService.register(user)
    .subscribe((data: any) => {
      this.router.navigateByUrl('/login');
    });
  }

  getErrorMessage() {
    if (this.profileForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.profileForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }


  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries() {
    this.countryService.getAllCountries()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(countries => this.countryList = countries);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
