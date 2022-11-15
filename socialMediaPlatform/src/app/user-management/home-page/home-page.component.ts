import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
