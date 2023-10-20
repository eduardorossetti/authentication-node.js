import UserGroup from "../../models/UserGroup";

export default class InMemoryUserGroupRepository {
  private _userGroups: UserGroup[];

  constructor() {
    this._userGroups = [
      { id: 1, name: "administrator" },
      { id: 2, name: "employee" },
    ];
  }

  getAll() {
    return this._userGroups;
  }

  getById() {}
}
