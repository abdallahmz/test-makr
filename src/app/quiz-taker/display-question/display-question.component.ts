import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from '../../shared/models/quiz-question';
import {Choice} from '../../shared/models/choice';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.scss']
})
export class DisplayQuestionComponent implements OnInit {
  @Input() index: number;
  @Input() question: QuizQuestion;
  @Input() showResult = false;
  constructor(public cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  changeValue(choice: Choice) {
    if (this.showResult) {
      return;
    }
    choice.userChoice = !choice.userChoice;
    this.cdRef.detectChanges();
  }
}
