function e(e,n){return new Promise(function(t){e.addEventListener(n,function(){// eslint-disable-next-line max-len
t("It was ".concat(n," on the element: ").concat(e.nodeName,", id: ").concat(e.id,"."))})})}var n=function(e){var n=document.createElement("div");n.classList="message",n.innerText=e,document.querySelector("body").append(n)},t=document.getElementById("login"),c=document.getElementById("password"),o=document.getElementById("submit");e(t,"click").then(n),e(c,"click").then(n),e(o,"click").then(n),e(t,"input").then(n),e(c,"input").then(n),e(t,"blur").then(n),e(c,"blur").then(n),e(o,"blur").then(n);//# sourceMappingURL=index.cd0b6c62.js.map

//# sourceMappingURL=index.cd0b6c62.js.map
