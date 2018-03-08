import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let todos = [
      {title: 'Core Java Tutorial', note: 'Java asdas asd asd asd as'},
      {title: 'Angular Tutorial', note: 'Angular aasd  asd a'},
      {title: 'Hibernate Tutorial', note: 'Hiberasdasdnate asd asd as'},
      {title: 'Hibernate as', note: 'Hiberasdasdnate asd asd as'},
      {title: 'Hibernate Tutasdorial', note: 'Hiberasdasdnate asd asd as'},
      {title: 'Hibernate Tutddddorial', note: 'Hiberasdasdnate asd asd as'}
    ];
    return {todo: todos};
  }
}
