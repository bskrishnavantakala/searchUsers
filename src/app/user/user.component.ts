import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  constructor(private service: UserService) {}
  users = [];
  serachusers = [];
  displyUsers = [];
  ngOnInit() {
    this.service.getUsers();
    this.service.userSubject$.subscribe((data) => {
      this.users = data;
      this.displyUsers = data;
    });
    this.updateTable();
  }
  updateTable() {
    this.service.searchUsers$.subscribe((user) => {
      console.log(user);
      this.serachusers = this.users.filter((data) => {
        return data.name.includes(user);
      });
      this.displyUsers = this.serachusers.length
        ? this.serachusers
        : this.users;
    });
  }
}
