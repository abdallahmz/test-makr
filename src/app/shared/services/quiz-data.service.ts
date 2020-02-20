import { Injectable } from '@angular/core';
import {Quiz} from '../models/quiz';
import { pack, unpack } from 'jsonpack';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuizQuestion} from '../models/quiz-question';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  constructor(public formBuilder: FormBuilder) { }

  formToQuiz(formGroup): Quiz {
    return {
      name: formGroup.get('name').value,
      introduction: formGroup.get('introduction').value,
      questions: formGroup.get('questions').value,
    };
  }

  quizToForm(quiz: Quiz): FormGroup {
    return this.formBuilder.group(
      {
        name: [quiz.name, Validators.required],
        introduction: quiz.introduction,
        questions: this.formBuilder.array(this.createQuestions(quiz))
      }
    );
  }

  createQuestions(quiz: Quiz) {
    return quiz.questions.map(q => {
      return this.formBuilder.group({
        question: q.question,
        choices: this.formBuilder.array(this.createChoices(q)),
        explanation: q.explanation
      });
    });
  }

  createChoices(question: QuizQuestion) {
      return question.choices.map(c => {
        return this.formBuilder.group({
          text: c.text,
          isCorrect: c.isCorrect,
        });
      });
    }

  createStringFromQuestions(quiz: Quiz): string {
    return btoa(pack(quiz));
  }

  loadQuestionsFromString(encodedQuiz: string): Quiz {
    return unpack(atob(encodedQuiz));
  }
}
