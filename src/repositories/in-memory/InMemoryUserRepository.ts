import User from "../../models/User";

export default class InMemoryUserRepository {
  private _users: User[];

  constructor() {
    this._users = [
      {
        name: "Eduardo",
        email: "edu@contact.com",
        phone: "(18)996454493",
        password: "$2b$10$kePWeMTmuijEjRZQbdyZduBwv3l.DRvGnMmru5rWE1gbBz.EPJBWu"
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
