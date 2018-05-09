import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'sr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public sidebarService: SidebarService,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.sidebarService.open = false;
      this.router.navigate(['/login']);
    });
  }

}
