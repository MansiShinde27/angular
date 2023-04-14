import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  num1:any;
  num2:any;
  result=0;

  add()
  {
    this.result=this.num1+this.num2;
  }
}
