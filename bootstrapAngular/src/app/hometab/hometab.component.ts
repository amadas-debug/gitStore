import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.component.html',
  styleUrls: ['./hometab.component.css']
})
export class HometabComponent implements OnInit {

  public name = 'abhishek';
  public myid = 'txtName';
  public propDisabled = true;
  public greeting = '';
  constructor() { }

  ngOnInit() {
  }
  greetUser() {
    return 'Hello World';
  }
  OnClick() {
    this.greeting = 'hi';

  }
}
