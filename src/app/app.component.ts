import { Component } from '@angular/core';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'my-profile',
  template: `
  <div id = "container">
  <h1>My Profile</h1>
    <img src={{person.avatar}} />
    <h2>My name is {{person.firstname}} {{person.lastname}}</h2>
    <h2> Age: {{person.age}} </h2>
    <h2> Address : </h2>
    <ul>
      <li> Street: {{person.address.street}}</li>
      <li> City: {{person.address.city}}</li>
      <li> Country: {{person.address.country}}</li>
    </ul>
    <h2>Friends:</h2>
   <ul>
      <li *ngFor="let friend of person.friends" >
          {{friend.name}}, Age:{{friend.age}}
      </li>
   </ul>
   </div>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstProfileApp';
  person = {
    firstname:'Duong',
    lastname:'Pham',
    age:34,
    avatar:'assets/circle.png',
    address:{
        street: '15 Dong Quan',
        city:'Ha Noi',
        country:'Viet Nam'
    },
    friends:[
      {name:'Bob', age:30},
      {name:'Cindy', age:31},
      {name:'Huyen', age:33}
    ]
  }
}
