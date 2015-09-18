function Pizza (size, quantity) {
  this.size = size;
  this.quantity = quantity;
  this.toppings = [];
}

Pizza.prototype.cost = function() {
  var total = 0
  if (this.size === "small") {
    total = total + 5;
  } else if (this.size === "medium") {
    total = total + 8;
  } else if (this.size === "large") {
    total = total + 10;
  } else {
    total = total + 15;
  }
  total = total * this.quantity;
  return total;
}

function Topping (name) {
  this.name = name;
}
