import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCreatorPageComponent } from './quiz-creator-page.component';

describe('QuizCreatorPageComponent', () => {
  let component: QuizCreatorPageComponent;
  let fixture: ComponentFixture<QuizCreatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCreatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
