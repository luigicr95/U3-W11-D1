import { Component, OnInit } from '@angular/core';
import { Users } from '../classes/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: Users[] = [];
  followedUsers: Users[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((resp) => (this.userList = resp));
    this.followedUsers = this.userService.followedUsers;
  }

  deleteUser(user: Users) {
    this.userService.removeUser(user.id).subscribe((resp) => {
      this.userList = this.userList.filter((ele) => ele.id != user.id);
    });
  }
}
