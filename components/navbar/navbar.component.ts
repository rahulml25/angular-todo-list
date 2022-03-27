import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../styles/navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  nav_title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
