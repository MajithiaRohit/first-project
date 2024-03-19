import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  setName="";
  setAge=0;
  setCity="";

  
  

  Friends =[{
    name: 'Rohit',
    age: 25,
    city: 'Bangalore'
  },{
    name: 'Mohit',
    age: 25,
    city: 'Lalpur'
  },{
    name:'Shubham',
    age: 25,
    city: 'Bankok'
  },{
    name:'paresh',
    age:-9,
    city:'Pal'
  }];

 addFriends(){

  const add= {
    name: this.setName,
    age: this.setAge,
    city: this.setCity
  }

    this.Friends.push(add)
 }


 deleteFriends(name:string){
    this.Friends = this.Friends.filter((f)=>{
      return f.name !== name;
    });
 }

 editFriend(name:string){
     const newTemp = this.Friends.find((f)=>{
        return f.name === name;
    })
   if(newTemp){
    //  this.temp = newTemp;
     this.setName = newTemp.name;
    this.setAge = newTemp.age;
    this.setCity = newTemp.city;
   }
 
   
 }

 editButton(){

    const eidt= {
      name: this.setName,
      age: this.setAge,
      city: this.setCity
    }
    this.Friends = this.Friends.map((f)=>{
      if(f.name === this.setName){
        return eidt
      }
      else
        return f
    })  
 }
}
