import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onHomeClick() {
    this.router.navigateByUrl('home');
  }
  onAboutClick() {
    this.router.navigateByUrl('about');
  }
  onSkillsClick() {
    this.router.navigateByUrl('skills');
  }
  onClientsClick() {
    this.router.navigateByUrl('clients');
  }
  onBlogClick() {
    this.router.navigateByUrl('blog');
  }
}
