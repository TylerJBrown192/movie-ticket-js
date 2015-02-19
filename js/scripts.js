var Ticket = {
  cost: 0,
  age: 0,
  time: 1,
  movie: "",
  price: function() {
    if (this.age <= 10) {
      this.cost += 0;
    } else if (this.age <= 59) {
      this.cost += 7;
    } else {
      this.cost += 3;
    }

    if (this.time < 4) {
      this.cost += 2;
    } else if (this.time < 7) {
      this.cost += 3;
    } else {
      this.cost += 4;
    }
  }
};
