import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizCreatorPageComponent} from './quiz-creator/quiz-creator-page/quiz-creator-page.component';
import {QuizTakerPageComponent} from './quiz-taker/quiz-taker-page/quiz-taker-page.component';
import {StartPageComponent} from './shared/components/start-page/start-page.component';
import {ResultPageComponent} from './quiz-taker/result-page/result-page.component';


const routes: Routes = [
  { path: 'create', component: QuizCreatorPageComponent},
  { path: 'take', component: QuizTakerPageComponent},
  { path: 'results', component: ResultPageComponent},
  { path: '**', component: StartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
