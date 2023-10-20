import Permission from "../../models/Permission";

export default class InMemoryPermissionRepository {
  private _permission: Permission[];

  constructor() {
    this._permission = [
      {
        id: 1,
        user_group: 1,
        domain: "project",
        permissions: ["getAll", "getById", "add", "update", "delete"],
      },
      {
        id: 2,
        user_group: 2,
        domain: "project",
        permissions: ["getAll", "getById"],
      },
    ];
  }

  getAll() {
    return this._permission;
  }
}
