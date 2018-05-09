import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { RessourceService } from '../../core/ressource.service';

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() page: string;
  @Input() menu = false;

  constructor(
    private sidebarService: SidebarService,
    public ressource: RessourceService
  ) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarService.open = !this.sidebarService.open;
  }

}
