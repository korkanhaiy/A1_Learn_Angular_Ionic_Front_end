import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import io from 'socket.io-client';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers = [];
  user: any;
  socket: any;

  constructor(private tokenService: TokenService, private userService: UsersService) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.user = this.tokenService.GetPayload();
    this.GetUser();
  }

  GetUser() {
    this.userService.GetUserById(this.user._id).subscribe(
      data => {
        this.followers = data.result.followers;
      },
      err => console.log(err)
    );
  }
}
