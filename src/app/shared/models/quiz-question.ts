import {Choice} from './choice';

export class QuizQuestion {
  question: string;
  choices: Choice[];
  correct: string;
  explanation: string;
  userAnswer?: number;
}
