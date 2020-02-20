import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../../shared/models/quiz';
import {QuizDataService} from '../../shared/services/quiz-data.service';
import {Router} from '@angular/router';
import {QuizQuestion} from '../../shared/models/quiz-question';
import {Choice} from '../../shared/models/choice';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {
  @Input() quiz: Quiz;

  get percentResult(): number {
    return 100 * ((this.totalRightAnswers) / (this.quiz.questions.length));
  }

  get totalRightAnswers(): number {
    return this.quiz.questions.reduce((acc, cur: QuizQuestion) => {
      const correct = this.questionIsCorrect(cur) ? 1 : 0;
      return acc + correct;
    }, 0);
  }

  constructor(public quizDataService: QuizDataService,
              public router: Router,
  ) {
    const currentNav = this.router.getCurrentNavigation();
    if (currentNav &&
      currentNav.extras &&
      currentNav.extras.state &&
      currentNav.extras.state.quiz
    ) {
      this.quiz = JSON.parse(currentNav.extras.state.quiz);
    }
    if (!this.quiz) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {}

  questionIsCorrect(question: QuizQuestion): boolean {
    let isCorrect = true;
    question.choices.forEach(choice => {
      if (!this.choiceIsCorrect(choice)) {
        isCorrect = false;
      }
    });
    return isCorrect;
  }

  choiceIsCorrect(choice: Choice): boolean {
    return !!choice.userChoice === !!choice.isCorrect;
  }
}
