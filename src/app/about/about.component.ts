import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  goBack(): void {
    this.location.back();
    location.reload();
  }
  constructor(
    private location: Location,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
