import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  class="dob"
  
  ngOnInit(): void {
  }

  button(){
    debugger;

    if(this.class=="dob")
    {
      this.class="dob active"
    }
    else if(this.class=="dob active")
    {
      this.class="dob"
    }
  }

  Days = [
    {key: 0, value: "---Select---",},
    { key: 1, value: "1"},
    { key: 2, value: "2"},
    { key: 3, value: "3"},
    { key: 4, value: "4"},
    { key: 4, value: "5"},
    { key: 6, value: "6"},
    { key: 7, value: "7"},
    { key: 8, value: "8"},
    { key: 9, value: "9"},
    { key: 10, value: "10"},
    { key: 11, value: "11"},
    { key: 12, value: "12"},
    { key: 13, value: "13"},
    { key: 14, value: "14"},
    { key: 15, value: "15"},
    { key: 16, value: "16"},
    { key: 17, value: "17"},
    { key: 18, value: "18"},
    { key: 19, value: "19"},
    { key: 20, value: "20"},
    { key: 21, value: "21"},
    { key: 22, value: "22"},
    { key: 23, value: "23"},
    { key: 24, value: "24"},
    { key: 25, value: "25"},
    { key: 26, value: "26"},
    { key: 27, value: "27"},
    { key: 28, value: "28"},
    { key: 29, value: "29"},
    { key: 30, value: "30"},
    { key: 31, value: "31"},
  ]


  Months = [
    {key: 0, value: "---Select---",},
    { key: 1, value: "January"},
    { key: 2, value: "February"},
    { key: 3, value: "March"},
    { key: 4, value: "April"},
    { key: 5, value: "May"},
    { key: 6, value: "June"},
    { key: 7, value: "July"},
    { key: 8, value: "August"},
    { key: 9, value: "September"},
    { key: 10, value: "October"},
    { key: 11, value: "November"},
    { key: 12, value: "December"},
  ]

  Year = [
    {key: 0, value: "---Select---",},
    { key: 1, value: "2001"},
    { key: 2, value: "2002"},
    { key: 3, value: "2003"},
    { key: 4, value: "2004"},
    { key: 5, value: "2005"},
    { key: 6, value: "2006"},
    { key: 7, value: "2007"},
    { key: 8, value: "2008"},
    { key: 9, value: "2009"},
    { key: 10, value: "2009"},
    { key: 11, value: "2010"},
    { key: 12, value: "2011"},
  ]

}
