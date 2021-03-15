var wrapper = document.body;
var dataArray = [
  {
    number: 0,
    color: "red"
  },
  {
    number: 0,
    color: "blue"
  },
  {
    number: 0,
    color: "green"
  }
];
var elements = [];

function colorFunc(number, color) {
  var that = this;
  this.number = number;
  this.color = color;

  this.ele = document.createElement("div");
  this.numberEle = document.createElement("div");
  this.numberEle.innerHTML = this.number;

  // CSS Styling
  // Assiging Color
  this.numberEle.style.backgroundColor = this.color;
  // DIV & Text Sizing
  this.numberEle.style.height = "100px";
  this.numberEle.style.width = "200px";
  this.numberEle.style.borderRadius = "10px";
  this.numberEle.style.fontSize = "18px";
  this.numberEle.style.marginBottom = "10px";
  // Centering Text
  this.numberEle.style.display = "flex";
  this.numberEle.style.alignItems = "center";
  this.numberEle.style.justifyContent = "center";
  // Random
  this.numberEle.style.userSelect = "none";
  this.numberEle.style.boxShadow = "2px 2px 8px";
  this.numberEle.style.cursor = "copy";
  this.numberEle.style.fontFamily = "'Comic Sans MS'";

  this.ele.appendChild(this.numberEle);

  this.ele.addEventListener("click", function () {
    that.increaseNumber();
  });
  wrapper.appendChild(this.ele);
}

colorFunc.prototype.increaseNumber = function () {
  this.number = this.number + 1;
  this.numberEle.innerHTML = this.number;
};

for (var i = 0; i < dataArray.length; i++) {
  elements.push(new colorFunc(dataArray[i].number, dataArray[i].color));
}