import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitBookModalComponent } from './exit-book-modal.component';

describe('ExitBookModalComponent', () => {
  let component: ExitBookModalComponent;
  let fixture: ComponentFixture<ExitBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitBookModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
