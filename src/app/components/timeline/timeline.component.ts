import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
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
