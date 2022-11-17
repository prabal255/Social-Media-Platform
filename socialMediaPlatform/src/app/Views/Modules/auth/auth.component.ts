import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
