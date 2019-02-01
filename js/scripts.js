// function PizzaOrder(size, crust, toppings) {
//   this.size = size;
//   this.crust = crust;
//   this.toppings = toppings;
//   this.price = 0;
// }
// var size = {
//   sizeOptions: ["Small", "Medium", "Thin"],
//   sizePrices: [7, 10, 13]
// };
// var crust = {
//   crustOptions: ["Regular", "Cheesy", "Thin"],
//   crustPrices: [3, 5, 6]
// };
// var toppings = {
//   toppingOptions: ["Pepperoni", "Jalapeno", "Onion", "BellPepper"],
//   toppingPrices: [2, 5, 3, 4]
// };
// function addPizzaOrder(size, crust, toppings) {
//   newPizzaOrder = new PizzaOrder(size, crust, toppings);
//   calculatePrice();
//   finalOrder.totalPrice += newPizzaOrder.price;
//   finalOrder.pizzas.push(newPizzaOrder);
//   finalOrder.orderedPizzas += 1;
// }
// function calculatePrice() {
//   newPizzaOrder.price =+ size.sizePrices[size.sizeOptions.indexOf(newPizzaOrder.size)] + crust.crustPrices[crust.crustOptions.indexOf(newPizzaOrder.crust)];
// }
$(document).ready(function() {
  $("#pizza-maker").submit(function() {
    alert("hello");
  });
});
