import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Countries } from 'src/app/core/interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

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

  constructor(private countryService: CountryService) { }

  onSubmit() {
    console.log('profile form: ', this.profileForm);
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
