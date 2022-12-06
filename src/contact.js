export default function contactTab() {
  const contentDiv = document.getElementById("content");

  const str = `<h1>Get In Touch</h1>
                  <p>We would love to hear from you! Give us a call or send us an email.<p>
                  <p>Phone: (444)-323-6666</p>
                  <p>Email: maggiespp@yummy.com</p>`

  contentDiv.innerHTML = str;
}