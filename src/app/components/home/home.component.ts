import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title:string="首页组件标题";
  public msg:string="im a msg from father component";
  constructor() { }

  ngOnInit() {


  }

  run(){

    alert("im a run method from father component");
  }

}
