import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {

  users = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log('app component is initialized');
     // this.users = this.userService.users;
    // this.users = this.userService.getUsers();
    this.userService.getUsers().subscribe(res => {
      this.users = res['results'];
      console.log(this.users);
    });
  }
}
