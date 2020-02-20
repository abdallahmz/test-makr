import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {QuizDataService} from '../../shared/services/quiz-data.service';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss']
})
export class CodeGeneratorComponent implements OnInit {
  @Input() quizForm: FormGroup;
  @ViewChild('quizCodeElement') quizCodeElement: ElementRef;
  quizCode: string;
  copied = false;
  constructor(private modalService: NgbModal,
              public quizDataService: QuizDataService
              ) { }

  ngOnInit(): void {
  }

  copy() {
    const c: any = document.querySelector('#quizcode');
    c.select();
    document.execCommand('copy');
    this.copied = true;
  }

  generateQuizCode(content) {
    this.quizCode = this.quizDataService.createStringFromQuestions(
      this.quizDataService.formToQuiz(this.quizForm)
    );
    this.quizCode = this.quizCode.trim();
    this.modalService.open(content, { centered: true });

  }
}
