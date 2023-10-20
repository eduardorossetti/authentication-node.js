import User from "../../models/User";

export default class InMemoryUserRepository {
  private _users: User[];

  constructor() {
    this._users = [
      {
        name: "Eduardo",
        email: "edu@contact.com",
        phone: "(18)996454493",
        password: "$2b$10$kePWeMTmuijEjRZQbdyZduBwv3l.DRvGnMmru5rWE1gbBz.EPJBWu",
        user_group: 1
      },
      {
        name: "Nathália",
        email: "nathalia@contact.com",
        phone: "(18)997209577",
        password: "$2b$10$KrVljj0CMmHG3Qq6C7vi.OPp1iknVIqS5EaWd3DA7jg.0AENnk7DO",
        user_group: 2
      },
    ];
  }

  async getByEmail(email: string): Promise<User> {
    const user = this._users.filter((user) => user.email === email);

    /*this._users.map((user) => {
        if(user.email === email){
            return user;
        }
    })*/
    return user[0];
  }
}
