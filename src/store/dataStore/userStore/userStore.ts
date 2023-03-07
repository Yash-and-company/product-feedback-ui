import { observable, action, makeObservable } from 'mobx'
import { User } from '../../models/user';

class UserStore {
  @observable user: User = {
    id: '001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'John.Doe@mail.com',
  };

  constructor() {
    makeObservable(this);
  }
}

const userStore = new UserStore();
export default userStore;
