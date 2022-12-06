import Pancake from './pancake1.jpg';

export default function homeTab() {
  const contentDiv = document.getElementById("content");

  const str = `<h1>Maggie's Pancake Parlor</h1>
                <div class="description">
                  <p>Welcome! Maggie’s Pancake Parlor has been serving yummy home cooked meals for years.
                  Come enjoy a stack of Oatmeal Buttermilk, Buckwheat or Whole Wheat pancakes.
                  Sit back and savor a waffle smothered in real maple syrup.
                  Come for lunch and have a slice of quiche made with local cheese.
                  Enjoy the view and ambiance while you eat!</p>
                </div>
                <div class="hours">
                  <h3>Hours</h3>
                    <p>Monday - Friday: 6am - 2pm</p>
                    <p>Saturday: 8am - 4pm</p>
                    <p>Sunday: 9am - 1pm</p>
                </div>
                <div class="location">
                  <h3>Location</h3>
                  <p>532 Sweet Breakfast Drive, Sugarville, Vermont</p>
                </div>
                <div class='pancake-pic'>
                  <img src="${Pancake}">
                </div>`
  
  contentDiv.innerHTML = str;
}