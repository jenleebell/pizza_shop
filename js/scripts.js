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
  $("#order-form").hide();
  $("#final-order").hide();

  $("#create-pizza").click(function(event){
    event.preventDefault();
    $("#shoppe-intro").hide();
    $("#order-form").show();
  });

  $("#order-form").submit(function(event){
    event.preventDefault();

    var selectedSize = $(".size:selected").val();
    var selectedQuantity = parseInt($("input#quantity").val());
    var selectedToppings = $("select#topping option:selected").val();
    var newPizza = new Pizza(selectedSize, selectedQuantity, selectedToppings);

    // $("#order-form").hide();
    $("#final-order").show();
    $("#final-order").empty().append("<p>your newly created pizza will cost <span class='pizza-cost'>" + newPizza.cost() + "</span> pounds</p>");
  });

});
