import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

/* 
const person = {
  fullName: function( age){
    return this.firstName + " " + this.lastName + " " + age;
  }
}

const mehdi = {
  firstName: "Mehdi",
  lastName: "Asgerov",
}

console.log(person.fullName.call(mehdi, 20));



const person1 = {
  fullName: function( age){
    return this.firstName + " " + this.lastName + " " + age;
  }
}

const mehdi1 = {
  firstName: "Mehdi",
  lastName: "Asgerov",
}

console.log(person1.fullName.apply(mehdi1, [20])); 



const person2 = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}

const mehdi2 = {
  firstName: "Mehdi",
  lastName: "Asgerov",
}

const answer = person2.fullName.bind(mehdi2);

console.log(answer); 
 */

















