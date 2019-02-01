function PizzaOrder(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}
var size = {
  sizeOptions: ["Small", "Medium", "Thin"],
  sizePrices: [7, 10, 13]
};
var crust = {
  crustOptions: ["Regular", "Cheesy", "Thin"],
  crustPrices: [3, 5, 6]
};
var toppings = {
  toppingOptions: ["Pepperoni", "Jalapeno", "Onion", "BellPepper"],
  toppingPrices: [2, 5, 3, 4]
};

$(document).ready(function() {
  $("#pizza-maker").submit(function(event) {
    event.preventDefault();
    var newPizzaSize = $("input:radio[name=pizza-size]:checked").val();
    var newpizzaCrust = $("input:radio[name=pizza-crust]:checked").val();
    var newPizzaToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
       newPizzaToppings.push($(this).val());
     });
  });
});
