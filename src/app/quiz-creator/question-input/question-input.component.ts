import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuizQuestion} from '../../shared/models/quiz-question';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-question-input',
  templateUrl: './question-input.component.html',
  styleUrls: ['./question-input.component.scss']
})
export class QuestionInputComponent implements OnInit {
  @Input() index: number;
  @Input() question: FormGroup;
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    console.log('Input is ', this.question);
  }

  get choices(): FormArray {
    return this.question.get('choices') as FormArray;
  }

  addChoice(): void {
    const choices = this.choices as FormArray;
    choices.push(this.createChoice());
    this.changeDetectorRef.detectChanges();
  }

  createChoice() {
    return this.formBuilder.group({
      text: '',
      isCorrect: false,
    });
  }

  removeChoice(i: number) {
    const choices = this.choices as FormArray;
    choices.removeAt(i);
    this.changeDetectorRef.detectChanges();
  }

  removeQuestion() {
    this.deleteClicked.emit();
  }

}
