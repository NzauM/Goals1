import { Component } from '@angular/core';
import { Goal} from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // goals: string[] = ['Finding Nemo','Watch Squid Game','Complete IP'];
  // goals:string[];
  // constructor(){
  //   this.goals = ['Finding Nemo','Watch Squid Game','Complete IP']
  // } 
  title = 'Our Goals';
  goal = 'Learning Angular Components';
  secret = 'This is our secret';
  // goals:Goal[] = [
  //   {id:1, name:'Watch finding Nemo'},
  //   {id:2,name:'Buy Cookies'},
  //   {id:3,name:'Get new Phone Case'},
  //   {id:4,name:'Get Dog Food'},
  //   {id:5,name:'Solve math homework'},
  //   {id:6,name:'Plot my world domination plan'},
  // ];

}
