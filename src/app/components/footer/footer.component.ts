import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() private outer=new EventEmitter();
  public msg:string="im a msg from child component";
  constructor() { }

  ngOnInit() {
  }

  run(){

    alert("im a run method from child component");
  }

  sendParent(){
    this.outer.emit('')
  }

}
