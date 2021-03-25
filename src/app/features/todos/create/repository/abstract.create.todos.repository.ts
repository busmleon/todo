import { AbstractError } from 'src/app/core/error/abstract.error';
import { TodoModel } from 'src/app/core/model';
import { IRepository } from 'src/app/core/repository';

export abstract class AbstractCreateTodosRepository implements IRepository {
  abstract createTodos(
    param: TodoModel[]
  ): Promise<TodoModel[] | AbstractError>;
}
