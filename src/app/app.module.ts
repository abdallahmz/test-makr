import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizCreatorPageComponent } from './quiz-creator/quiz-creator-page/quiz-creator-page.component';
import { QuizTakerPageComponent } from './quiz-taker/quiz-taker-page/quiz-taker-page.component';
import { StartPageComponent } from './shared/components/start-page/start-page.component';
import { QuestionInputComponent } from './quiz-creator/question-input/question-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChoiceInputComponent } from './quiz-creator/choice-input/choice-input.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CodeGeneratorComponent } from './quiz-creator/code-generator/code-generator.component';
import { ResultPageComponent } from './quiz-taker/result-page/result-page.component';
import { DisplayQuestionComponent } from './quiz-taker/display-question/display-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizCreatorPageComponent,
    QuizTakerPageComponent,
    StartPageComponent,
    QuestionInputComponent,
    ChoiceInputComponent,
    CodeGeneratorComponent,
    ResultPageComponent,
    DisplayQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
