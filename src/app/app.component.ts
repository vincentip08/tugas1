import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  hasil = 0;
  temp = '';
  show : boolean = true;
  temp1 = '';
  temp2 = '';
  arrPola = [];
  index = 0;
  saveVariables(a, b){
    this.hasil = Math.pow(a, b);
    if(this.hasil % 2 == 0){
      for(var i =0; i<parseInt(b);i++){
        this.temp = this.temp + "*";
      }
      this.arrPola.push(this.temp);
      for(var i=parseInt(b); i<=this.hasil;i++){
        this.temp = this.temp+"*";
        this.arrPola.push(this.temp);
      } 
    }
    else {
      if(parseInt(a)<=parseInt(b)){
    
        for(var i = parseInt(b);i>0;i--){
          this.temp1='';
          for(var j=0;j<i;j++){
            this.temp1 = this.temp1 +"*";
            }
          
        }
      }
    }
    }
  }


