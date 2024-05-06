alert("You are visiting wd51-group2-cookbook");

function message() {
  var txt;
  if (confirm("Do you want to share the recipe?")) {
    alert("Thank you!");
  } else if (confirm("So Sad!\nPlease share our recipe :)")) {
    alert("You'll love it\nThank you!");
  } else {
    message();
  }
}
