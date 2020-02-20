import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTakerPageComponent } from './quiz-taker-page.component';

describe('QuizTakerPageComponent', () => {
  let component: QuizTakerPageComponent;
  let fixture: ComponentFixture<QuizTakerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTakerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTakerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
