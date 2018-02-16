import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchFormComponent } from './movie-search-form.component';

describe('MovieSearchFormComponent', () => {
  let component: MovieSearchFormComponent;
  let fixture: ComponentFixture<MovieSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
