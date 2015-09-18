describe("Pizza", function() {
  it("creates a new pizza order", function() {
    var testPizza = new Pizza("Large", 2);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.quantity).to.equal(2);
  });
  it("calculates cost for base pizza", function() {
    var testPizza = new Pizza("Large", 2);
    expect(testPizza.cost).to.equal("20");
  });
});

describe("Topping", function() {
  it("creates a new topping", function() {
    var testTopping = new Topping("pepperoni");
    expect(testTopping.name).to.equal("pepperoni");
  });
});
