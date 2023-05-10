import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Countries } from 'src/app/core/interfaces/countries.interface';
import { RegisterForm, User } from 'src/app/core/interfaces/register-form.interface';
import { AuthService } from '../../services/auth.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private readonly nameValidators = [Validators.required, Validators.pattern(/^[A-Z][a-z]+$/)];
  private readonly passwordValidators = [Validators.required, Validators.pattern(/^\S{8,}$/)];

  profileForm = this.fb.group({
    firstName: ['', this.nameValidators],
    lastName: ['', this.nameValidators],
    email: ['', [Validators.required, Validators.email]],
    password: ['', this.passwordValidators],
    confirmPassword: ['', this.passwordValidators],
    countries: [null, Validators.required]
  }, { validators: [this.confirmPasswordValidator] })


  countryList: Countries[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>;

  constructor(
    private countryService: CountryService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  onSubmit() {
    const formData = this.profileForm.value as RegisterForm;
    console.log(this.profileForm);
    const user: User = {
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      password: formData.password || '',
      countryId: formData.countries!.id,
      role: 'user',
      createdAt: new Date().toISOString(),
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

  private confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;

    const passwordControl: FormControl = formGroup.get('password') as FormControl;
    const confirmPasswordControl: FormControl = formGroup.get('confirmPassword') as FormControl;

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({
        notMatch: {
          message: 'Confirm password not matching with the password'
        }
      })
    } else {
      confirmPasswordControl.setErrors(null)
    }

    return null;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
