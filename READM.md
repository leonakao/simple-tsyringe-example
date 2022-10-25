##

```ts
class CreateTodoService {
  async create(data: string): Promise<Todo> {
    const repo = new TodoDatabase();

    const email = new EmailService();

    email.send({});

    return repo.save(data);
  }
}
```

# Inversion of Control

```ts

type Todo ={
  id:string;
  name:string;
}

interface ITodoRepository{
  save:(name:string):Todo
}

// Implementation
class TodoRepositoryInMemory implements ITodoRepository{
  private data :Todo =[]

  save(name:string):Todo{
    return data
  }
}

class TodoRepositorySQL implements ITodoRepository{
  private data :Todo =[]

  save(name:string):Todo{
    return data
  }
}

class TodoRepositoryCache implements ITodoRepository{
  private data :Todo =[]

  save(name:string):Todo{
    return data
  }
}

```

# Dependency Injection

```ts
class CreateTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async create(data: string): Promise<Todo> {
    return this.todoRepository.save(name);
  }
}
```

# Ganhos

- Desacoplamento
- Facilidade de aplicar test
- Facilidade de aplicar Design Patterns
- Facil manutenção
- Depender de abstrações e não de implementação
