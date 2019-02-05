import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Github users';
  newUser= new User("","","",0,0,0,"");
  constructor() { }

  ngOnInit() {
  }
 
    // constructor(
    //   public name:string,
    //   public repositorise:string,
    //   public followers:number,
    //   public following:number,)
      // {

    }

// }
