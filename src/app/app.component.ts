import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  container;

  items = ["Benz", "Volvo", "BMW" , "Benz", "Volvo", "BMW" , "Benz", "Volvo", "BMW" , "Benz", "Volvo", "BMW","Benz", "Volvo", "BMW"  ];
  cars=["Ferrari","Bugati","Lambo","Ferrari"]

  ngOnInit(){
  
  }

  onReachEnd(event,id){
    console.log('reachedDown');
    document.getElementById(id).click();
  }
  

  loadMoreEvent(){
    console.log('loadMore Emit');
    this.items = this.items.concat(this.cars);

  }

  test(){
    console.log('me changed')

  }
}
