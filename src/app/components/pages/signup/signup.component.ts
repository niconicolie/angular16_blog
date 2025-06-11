import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = { username: '', email: '', pass: '' };

  constructor (private userService: UsersService) {}

  onSubmit() {
    this.userService.addUser(this.user).subscribe(response => {
      console.log('User added: ', response);
      this.user = { username: '', email: '', pass: ''};
    });
  }
}
