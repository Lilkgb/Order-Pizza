function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

$(document).ready(function() {
  $("#custom-pizza").submit(function(event) {
    event.preventDefault();
    console.log("hello");
  });
});
