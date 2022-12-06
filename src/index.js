import './style.css';
import homeTab from "./home";
import menuTab from "./menu";
import contactTab from "./contact";

const tabSwitcher = (() => {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  const switchTabs = (tabFunction) => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '';
    tabFunction();
  }

  menuBtn.addEventListener('click', () => {switchTabs(menuTab)});
  contactBtn.addEventListener('click', () => {switchTabs(contactTab)});
  homeBtn.addEventListener('click', () => {switchTabs(homeTab)});

  homeTab();
})();