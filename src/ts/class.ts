// public    可以在外部被访问
// protected 只能在内部与派生类中访问
// private   只能在内部被访问

// readonly 只读不可修改，一般提前预设好
class Person {
  public username: string;
  private password: string;
  protected userID: string;
  readonly skills = ["nodejs", "javascript"];

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.userID = username + password;
  }
}

// get/set 方法用于读取一些带有一定权限的数据
let passcode = "secret passcode";

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  alert(employee.fullName);
}
