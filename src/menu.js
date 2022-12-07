export default function menuTab() {
  const contentDiv = document.getElementById("content");

  const str = `<h1><u>Menu</u></h1>
                  <div class="container">
                    <h3><u>Drinks</u></h3>
                    <p>Coffee - $2.00</p>
                    <p>Tea - $1.50</p>
                    <p>Juice - $2.25</p>
                    <h3><u>Pancakes</u></h3>
                    <p>Plain Buttermilk - $8.00</p>
                    <p>Oatmeal Buttermilk - $8.50</p>
                    <p>Buckwheat - $9.00</p>
                    <p>Whole Wheat - $8.00</p>
                    <p>Blueberry - $9.50</p>
                    <h3><u>Other Favorites</u></h3>
                    <p>Eggs Benedict - $12.00</p>
                    <p>Steak and Eggs - $15.00</p>
                    <p>Build Your Own Omelet - $10.00</p>
                  </div>`

  contentDiv.innerHTML = str;
}