import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../shared/models/quiz';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizDataService} from '../../shared/services/quiz-data.service';
import {QuizQuestion} from '../../shared/models/quiz-question';

@Component({
  selector: 'app-quiz-taker-page',
  templateUrl: './quiz-taker-page.component.html',
  styleUrls: ['./quiz-taker-page.component.scss']
})
export class QuizTakerPageComponent implements OnInit {
  quiz: Quiz;
  currentIndex = 0;

  get currentQuestion(): QuizQuestion {
    return this.quiz.questions[this.currentIndex];
  }
  constructor(
    public quizDataService: QuizDataService,
    public router: Router,
    private route: ActivatedRoute) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      this.quiz = this.quizDataService.loadQuestionsFromString(params.quiz);
    });
  }

  ngOnInit(): void {
  }

  controlRange() {
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    }
    if (this.currentIndex >= this.quiz.questions.length) {
      this.currentIndex = this.quiz.questions.length - 1;
    }
  }

  goToPreviousQuestion() {
    this.currentIndex--;
    this.controlRange();
  }

  goToNextQuestion() {
    this.currentIndex++;
    this.controlRange();
  }

  goToResult() {
    this.router.navigate(['/results'], {state: {quiz: JSON.stringify(this.quiz)}});
  }
}
