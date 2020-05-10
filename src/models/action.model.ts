import { Todo } from '../models/todo.model';

export interface Action {
  type: string;
  todo?: Todo;
}
