import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  constructor(private service: UserService) {}
  user: string = "";
  ngOnInit() {}
  updateUser() {
    this.service.searchUserUpdate(this.user);
  }
}
