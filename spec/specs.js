describe("Pizza", function() {
  it("creates a new pizza order", function() {
    var testPizza = new Pizza("Large", 2);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.quantity).to.equal(2);
  });
});
