let style = document.createElement('style');
document.head.appendChild(style);
style.sheet.insertRule(
  'body {background-color: #ececec; margin: 0px; padding: 0px; font-family: sans-serif;}'
);

let heder = document.createElement("header")
document.body.prepend(heder)
style.sheet.insertRule(
  'header {background-color: white; display: flex; justify-content: space-between; padding:10px; align-items: center; height: 15px;}'
);

let h1 = document.createElement("h1")
h1.innerHTML = "Elzero"
style.sheet.insertRule(
  'header h1 {color: #1b9661; font-weight: bolder;}'
);
let ul = document.createElement("ul")
heder.appendChild(ul)
ul.innerHTML = "<li>Home</li><li>About</li><li>Service</li><li>Contact</li>"
style.sheet.insertRule(
  'ul li{margin-left: 10px;}'
);
style.sheet.insertRule(
  'ul {display: flex; list-style: none;}'
);

heder.prepend(h1)





let main = document.createElement("main")
heder.after(main)
for (i = 0; i < 15; i++) {
  let box = document.createElement("div")
  main.appendChild(box)
  box.innerHTML = `<p>${i + 1}</p><span>Product</span>`
  style.sheet.insertRule(
  'main div{display: flex; width: calc(95% / 3); height: 141px; background-color: #fff; margin-bottom:10px ;margin-top:10px; flex-direction: column; justify-content:center; align-items: center;'
  );
  style.sheet.insertRule(
  'main div p {font-size: 50px; margin: 5px;}'
);
}
style.sheet.insertRule(
  'main {display: flex; flex-wrap: wrap; justify-content: space-evenly }'
);





let footer = document.createElement("footer")
main.after(footer)
style.sheet.insertRule(
  'footer {display: flex; background-color:#23a96e; width: 100%; justify-content: center; color:#fff; heigth: 100px; height: 70px; align-items:center; }'
);

let fop = document.createElement("p")
fop.innerHTML = "Copyright 2022"
footer.appendChild(fop)


