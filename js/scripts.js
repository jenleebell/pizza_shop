function Pizza (size, quantity, toppings) {
  this.size = size;
  this.quantity = quantity;
  this.toppings = [];
}

Pizza.prototype.topping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.cost = function() {
  var total = 0
  var toppings = this.toppings;
  var toppingsAmount = toppings.length;

  if (this.size === "small") {
    total = total + 5;
  } else if (this.size === "medium") {
    total = total + 8;
  } else if (this.size === "large") {
    total = total + 10;
  } else {
    total = total + 15;
  }
  return total = total * this.quantity + (toppingsAmount * 1);
}
