describe("Pizza", function() {
  it("creates a new pizza order", function() {
    var testPizza = new Pizza("large", 2, []);
    expect(testPizza.size).to.equal("large");
    expect(testPizza.quantity).to.equal(2);
    expect(testPizza.toppings).to.eql([])
  });

  it("adds topping to pizza order", function(){
    var testPizza = new Pizza("large", 2, []);
    testPizza.topping("pepperoni");
    expect(testPizza.toppings).to.eql(["pepperoni"])
  });

  it("calculates cost for base pizza", function() {
    var testPizza = new Pizza("large", 2);
    expect(testPizza.cost()).to.equal(20);
  });

  it("calculates cost for pizza with toppings", function() {
    var testPizza = new Pizza("large", 2, []);
    testPizza.topping("pepperoni");
    testPizza.topping("pepperoni");
    expect(testPizza.cost()).to.equal(22);
  });
});
