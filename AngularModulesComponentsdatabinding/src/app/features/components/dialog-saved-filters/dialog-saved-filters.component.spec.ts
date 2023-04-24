import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSavedFiltersComponent } from './dialog-saved-filters.component';

describe('DialogSavedFiltersComponent', () => {
  let component: DialogSavedFiltersComponent;
  let fixture: ComponentFixture<DialogSavedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSavedFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSavedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
