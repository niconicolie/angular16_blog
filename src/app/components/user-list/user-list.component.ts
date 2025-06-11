import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor (private userService: UsersService) {}

  ngOnInit(): void {
    this.getAll();
  }

 getAll(): void {
    this.userService.getAll().subscribe((users) => { 
      this.users = users });
   
  }


}
