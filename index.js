class _EmbedsHanddler {
  constructor() {
    this.m = document.createElement("meta");
  }
  title(text) {
    this.m.setAttribute("property", "ob:title");
    this.m.content = text;
    document.head.appendChild(this.m);
    return;
  }
  description(text) {
    this.m.setAttribute("property", "ob:description");
    this.m.content = text;
    document.head.appendChild(this.m);
    return;
  }
  imageUrl(url) {
    this.m.setAttribute("property", "ob:image");
    this.m.content = url;
    document.head.appendChild(this.m);
    return;
  }
  thumbnail(url) {
    this.m.setAttribute("property", "ob:thumbnail");
    this.m.content = url;
    document.head.appendChild(this.m);
    return;
  }
  color(col) {
    this.m.setAttribute("property", "ob:theme-color");
    this.m.content = col;
    document.head.appendChild(this.m);
    return;
  }
}
function onEmbeds() {
  return new _EmbedsHanddler()
}



onEmbeds().title("title text")
onEmbeds().description("description text")