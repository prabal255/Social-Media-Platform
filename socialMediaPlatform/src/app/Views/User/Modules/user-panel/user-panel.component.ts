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

}
