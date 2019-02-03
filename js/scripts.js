function PizzaOrder(size, crust, toppings) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaToppings = toppings;
  this.price = 0;
}
function OrderTotal() {
  this.pizzas=[];
  this.totalPrice=0;
  this.orderedPizzas=0;
}
var sizes = {
  sizeOptions: ["Small", "Medium", "Large"],
  sizePrices: [7, 10, 13]
};
var crusts = {
  crustOptions: ["Regular", "Cheesy", "Thin"],
  crustPrices: [3, 5, 6]
};
var toppings = {
  toppingOptions: ["Pepperoni", "Jalapeno", "Onion", "BellPepper"],
  toppingPrices: [2, 5, 3, 4]
};
function addPizzaOrder(size, crust, toppings) {
  newPizzaOrder = new PizzaOrder(size, crust, toppings);
  calculatePrice();
  finalOrder.totalPrice += newPizzaOrder.price;
  finalOrder.pizzas.push(newPizzaOrder);
  finalOrder.orderedPizzas += 1;
}
function calculatePrice(){

  newPizzaOrder.price +=  sizes.sizePrices[sizes.sizeOptions.indexOf(newPizzaOrder.pizzaSize)] + crusts.crustPrices[crusts.crustOptions.indexOf(newPizzaOrder.pizzaCrust)];

  for (var i = 0; i < newPizzaOrder.pizzaToppings.length; i++) {
  var toppingPrice = toppings.toppingOptions.indexOf(newPizzaOrder.pizzaToppings[i]);
  newPizzaOrder.price += toppings.toppingPrices[toppingPrice];
  }
}

$(document).ready(function() {
  finalOrder = new OrderTotal();
  $("#pizza-maker").submit(function(event) {
    event.preventDefault();
    var newPizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var newpizzaCrust = $("input:radio[name=pizza-crust]:checked").val();
    var newPizzaToppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(){
       newPizzaToppings.push($(this).val());
      });
    var donePizza = addPizzaOrder(newPizzaSize, newpizzaCrust, newPizzaToppings);
    console.log(finalOrder);
    $("ul#order").append("<li>This pizza is: $"+newPizzaOrder.price+"</li><br>");
    $("ul#order").append("<li>Pizza size:  "+newPizzaOrder.pizzaSize+"</li><br>");
    $("ul#order").append("<li>Crust chosen: "+newPizzaOrder.pizzaCrust+"</li><br>");
    $("ul#order").append("<li>Toppings chosen: "+newPizzaOrder.pizzaToppings+"</li><br>");
    $("#pizza-maker").hide("slow");
    $("#orderSummary").show("slow");
  });
  $("#anotherPizza").click(function() {
    $("#pizza-maker").show("slow");
    $("#orderSummary").hide("slow");
  });
  $("#totalOrder").click(function() {
    $("#orderSummary").hide("slow");
    $("#totalAmount").show("slow");
    $(".totalForPizzas").text(finalOrder.totalPrice);
  });
  $("#reset").click(function() {
    $("#totalAmount").hide("slow");
    $("#pizza-maker").show("slow");
    finalOrder = new OrderTotal();
    $("#order").text('');
  });
});
