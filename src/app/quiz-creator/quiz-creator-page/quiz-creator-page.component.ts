import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Quiz} from '../../shared/models/quiz';
import {QuizQuestion} from '../../shared/models/quiz-question';
import {QuizDataService} from '../../shared/services/quiz-data.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-creator-page',
  templateUrl: './quiz-creator-page.component.html',
  styleUrls: ['./quiz-creator-page.component.scss']
})
export class QuizCreatorPageComponent implements OnInit {

  quizForm: FormGroup;

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  constructor(public quizDataService: QuizDataService,
              private formBuilder: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              public router: Router,
              ) {
    const currentNav = this.router.getCurrentNavigation()
    console.log('Cur nav is ', currentNav);
    if (currentNav &&
      currentNav.extras &&
      currentNav.extras.state &&
      currentNav.extras.state.quiz
    ) {
      console.log('quiz is in create', currentNav.extras.state.quiz);
      const formFromNav = this.quizDataService.quizToForm(JSON.parse(currentNav.extras.state.quiz));
      if (formFromNav) {
        this.quizForm = formFromNav;
      }
      console.log('Quiz form is now ', this.quizForm);
    }
  }

  ngOnInit(): void {
    if (!this.quizForm) {
      this.quizForm = this.formBuilder.group({
        name: ['', Validators.required],
        introduction: '',
        questions: this.formBuilder.array([this.createQuestion()])
      });
    }
    this.changeDetectorRef.detectChanges();

  }

  removeQuestion(i: number) {
    this.questions.removeAt(i);
    this.changeDetectorRef.detectChanges();
  }

  addQuestion(): void {
    this.questions.push(this.createQuestion());
    this.changeDetectorRef.detectChanges();
  }

  createQuestion(): FormGroup {
    return this.formBuilder.group({
      question: '',
      choices: this.formBuilder.array([]),
      correctChoice: '',
      explanation: ''
    });
  }
}
