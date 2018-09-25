
var icecreams = ["ice-cream1", "ice-cream2", "ice-cream3"];
var scoops = [];

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    icecreams.forEach(function(cream) {

      scoops.push($("#" + cream).val());
    });

    // scoops.push($("#ice-cream1").val());
    // scoops.push($("#ice-cream2").val());
    // scoops.push($("#ice-cream3").val());

    scoops.forEach(function(scoop){
      $("#cone-output").append(" " + scoop);
    });

  });
});
