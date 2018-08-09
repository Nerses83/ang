import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';
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
