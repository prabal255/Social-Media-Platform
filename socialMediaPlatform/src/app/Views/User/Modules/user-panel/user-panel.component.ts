import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class UserPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  class="res-menu mm-menu mm-offcanvas"
  forOpened=""


menu(){
  debugger
  if(this.class=="res-menu mm-menu mm-offcanvas")
  {
    this.class="res-menu mm-menu mm-offcanvas mm-opened"
    this.forOpened="mm-opened mm-blocking mm-background mm-opening"
  }
  else{
    this.class="res-menu mm-menu mm-offcanvas"
    this.forOpened=""
  }
}
}
