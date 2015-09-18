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

$(document).ready(function() {
  $("#order-form-one").hide();
  $("#order-form-two").hide();
  $("#order-form-three").hide();
  $("#final-order").hide();

  $("#create-pizza").click(function(event){
    event.preventDefault();
    $("#shoppe-intro").hide();
    $("#order-form-one").show();
  });

  $("#order-form-one").submit(function(event){
    event.preventDefault();
    //
    // var size = $("input#size").val();
    // pizza.size = pizzaSize;
    $("#order-form-one").hide();
    $("#order-form-two").show();
  });

  $("#order-form-two").submit(function(event){
    event.preventDefault();
    //
    // var size = $("input#size").val();
    // pizza.size = pizzaSize;
    $("#order-form-two").hide();
    $("#order-form-three").show();
  });

  $("#order-form-three").submit(function(event){
    event.preventDefault();
    //
    // var size = $("input#size").val();
    // pizza.size = pizzaSize;
    $("#order-form-three").hide();
    $("#final-order").show();
  });
});
