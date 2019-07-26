//引入input 模块
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //接受父组件传值
  @Input() title:any;

  @Input() msg:any;

  @Input() run:any;

  @Input() home:any;
  constructor() { }

  ngOnInit() {
  }

  getParentMsg(){
    //获取父组件的数据
    alert(this.msg);

  }
  getParentRun(){

    //执行父组件的run方法
    //this.run();
    alert(this.home.msg);
    this.home.run();
  }
}
