interface Todo {
  id: number;
  name: string
}

interface ITodoRepository {
  create(name: string): Promise<Todo>;
}

class TodoRepositoryMemory implements ITodoRepository {
  private todos: Todo[] = [];

  create(name: string): Promise<Todo> {
      const todo = { id: this.todos.length + 1, name }

      this.todos.push(todo)

      return Promise.resolve(todo);
  }
}


class ClientCode {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async create(name: string): Promise<Todo> {
      return this.todoRepository.create(name);
  }
}

const clientCode = new ClientCode(new TodoRepositoryMemory());

clientCode.create('Learn Dependency Injection').then(console.log);
clientCode.create('Learn Dependency Injection2').then(console.log);
clientCode.create('Learn Dependency Injection3').then(console.log);