
var scoops  = ["ice-cream1", "ice-cream2", "ice-cream3"];

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    scoops.forEach(function(scoop) {
      scoops[0, 1, 2] = scoops.push($("#" + scoop).val());
    });


    scoops.forEach(function(scoop){
      $("#cone-output").append(" " + scoop);
    });

  });
});
