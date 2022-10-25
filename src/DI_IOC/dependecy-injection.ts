console.log('DI/Ioc');

enum Status{
  Active='enable'
}

type Client ={
  id:string
  name:string
  status:Status

} 


interface ClientRepository {
  list:() =>Client[]
  save:(name:string)=>void
} 

class ClientRepositoryInMemory implements ClientRepository{
  private data :Client[]= [];

  list(){
    return this.data
  }

  save(name:string){
    this.data.push({
      id:Math.random().toString(),
      name,
      status:Status.Active
    })
  }
}


class ClientRepositoryCache implements ClientRepository{
  private data :Client[]= [];

  list(){
    return this.data
  }

  save(name:string){
    this.data.push({
      id:Math.random().toString(),
      name,
      status:Status.Active

    })
  }
}


class CreateClientUseCase {
  constructor (private readonly repo :ClientRepository){
  }

  run(name:string){
    this.repo.save(name)
    console.log(this.repo.list());
  }

}


const c = new CreateClientUseCase(new ClientRepositoryCache())

c.run('test')