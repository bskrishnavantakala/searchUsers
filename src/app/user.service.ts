import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  private users = new BehaviorSubject<any>([]);
  userSubject$ = this.users.asObservable();

  private searchUsers = new BehaviorSubject<any>("");
  searchUsers$ = this.searchUsers.asObservable();

  getUsers() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data) => {
        this.users.next(data);
      });
  }
  searchUserUpdate(user) {
    this.searchUsers.next(user);
  }
}
