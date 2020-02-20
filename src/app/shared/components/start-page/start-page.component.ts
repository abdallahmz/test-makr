import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuizDataService} from '../../services/quiz-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  quizCodeTestEditor: FormControl = new FormControl('');
  quizCodeTestTaker: FormControl = new FormControl('');
  constructor(public quizDataService: QuizDataService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  onCodeEditorSubmit() {
    const quiz = this.quizDataService.loadQuestionsFromString(this.quizCodeTestEditor.value);
    this.router.navigate(['/create'], {state: {quiz: JSON.stringify(quiz)}});
  }

  onCodeTakerSubmit() {
    // tslint:disable-next-line:max-line-length
    // bmFtZXxBbmd1bGFyK3Rlc3R8aW50cm9kdWN0aW9ufHF1ZXN0aW9uc3xxdWVzdGlvbnx3aGF0K2lzK25nSWZ8Y2hvaWNlc3x0ZXh0fGlzQ29ycmVjdHxhK3RhZ3xhbithdHRyaWJ1dGV8Y29ycmVjdENob2ljZXxleHBsYW5hdGlvbnxuZ2lmK2lzK2RpcmVjdGl2ZXx3aGNoK3ZlcnNpb258Ml5eXiQwfDF8MnwtNHwzfEAkNHw1fDZ8QCQ3fC00fDh8LTJdfCQ3fDl8OHwtMl18JDd8QXw4fC0yXV18QnwtNHxDfERdfCQ0fEV8NnxAJDd8LTR8OHwtMl18JDd8Rnw4fC0xXV18QnwtNHxDfC00XV1d
    this.router.navigate(['/take'], {queryParams: {quiz: this.quizCodeTestTaker.value}});
  }
}
