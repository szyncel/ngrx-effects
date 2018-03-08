import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let todos = [
      {id: 1, title: 'Core Java Tutorial', note: 'Java asdas asd asd asd as'},
      {id: 2, title: 'Angular Tutorial', note: 'Angular aasd  asd a'},
      {id: 3, title: 'Hibernate Tutorial', note: 'Hiberasdasdnate asd asd as'},
      {id: 4, title: 'Hibernate as', note: 'Hiberasdasdnate asd asd as'},
      {id: 5, title: 'Hibernate Tutasdorial', note: 'Hiberasdasdnate asd asd as'},
      {id: 6, title: 'Hibernate Tutddddorial', note: 'Hiberasdasdnate asd asd as'}
    ];
    return {todo: todos};
  }
}
