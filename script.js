`use strict`
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let element;
    if (this.selector.startsWith(".")) {
      element = document.createElement("div");
      element.className = this.selector.slice(1);
    } else if (this.selector.startsWith("#")) {
      element = document.createElement("p");
      element.id = this.selector.slice(1);
    }

    element.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;
    `;

    element.textContent = "привет"; // Здесь можно задать любой текст

    document.body.appendChild(element);
  };
}

let element = new DomElement(".block", 200, 300, "red", 20);
element.createElement();
