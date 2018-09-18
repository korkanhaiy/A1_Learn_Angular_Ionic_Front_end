import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: any;
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit() {
    this.user = this.tokenService.GetPayload();
    // console.log(this.user);
  }
  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['']); // กับสู่ห้าล๋อกอิน
  }

  GotoHome() {
    this.router.navigate(['streams']);
  }
}
