import { Menu } from './../models/Menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickMenu(menu: Menu) {
    this.router.navigate([menu.url])
  }

  listMenu: Menu[] = [
    {
      id: 1,
      title: "Home",
      url: ""
    },
    {
      id: 2,
      title: "Status",
      url: "/status"
    },
    {
      id: 3,
      title: "Tasks",
      url: "/task"
    }
  ]
}
