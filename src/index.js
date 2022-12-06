import './style.css';
import Pancake from './pancake1.jpg';

const contentDiv = document.getElementById("content");

function homeHeading() {
  const element = document.createElement('h1');

  element.innerHTML = "Maggie's Pancake Parlor";

  return element
}

function description() {
  const element = document.createElement('p');

  element.innerHTML = "Welcome! Maggie's Pancake Parlor has been serving yummy home cooked meals for years. Come enjoy a stack of Oatmeal Buttermilk, Buckwheat or Whole Wheat pancakes. Sit back and savor a waffle smothered in real maple syrup. Come for lunch and have a slice of quiche made with local cheese. Enjoy the view and ambiance while you eat!";

  return element
}

function hours() {
  const element = document.createElement('div');

  const str = `<h3>Hours</h3>
          <p>Monday - Friday: 6am - 2pm</p>
          <p>Saturday: 8am - 4pm</p>
          <p>Sunday: 9am - 1pm</p>`

  element.innerHTML = str;

  return element
}

function location() {
  const element = document.createElement('div');

  const str = `<h3>Location</h3>
          <p>532 Sweet Breakfast Drive, Sugarville, Vermont</p>`

  element.innerHTML = str;

  return element
}

function pancakePicture() {
  const element = document.createElement('div');

  const str = `<img src="${Pancake}">`

  element.innerHTML = str;

  return element
}

contentDiv.appendChild(homeHeading());
contentDiv.appendChild(description());
contentDiv.appendChild(hours());
contentDiv.appendChild(location());
contentDiv.appendChild(pancakePicture());