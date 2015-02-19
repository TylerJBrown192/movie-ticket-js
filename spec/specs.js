describe('Ticket', function() {
  describe('price', function() {
    it("gets ya da price", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age = 10;
      testTicket.movie = "50 Shades of Gray";
      testTicket.time = 5;
      testTicket.price();
      expect(testTicket.cost).to.equal(3);
    });

    it("gets ya mo prices dawg", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age = 30;
      testTicket.movie = "Secretary";
      testTicket.time = 9;
      testTicket.price();
      expect(testTicket.cost).to.equal(11);
    });
  });
});
