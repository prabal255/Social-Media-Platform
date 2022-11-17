import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepagenavbar',
  templateUrl: './homepagenavbar.component.html',
  styleUrls: ['./homepagenavbar.component.css']
})
export class HomepagenavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  class="user-setting"

  button(){
    if(this.class=="user-setting")
    {
      this.class="user-setting active"
    }
    else if(this.class=="user-setting active")
    {
      this.class="user-setting"
    }
  }
}
