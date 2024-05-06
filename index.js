alert("You are visiting http://127.0.0.1:3000/wd51-group2-cookbook/index.html");

function message() {
  var txt;
  if (confirm("Do you want to share the recipe?")) {
    txt = "Thank you!";
  } else {
    txt = "So Sad!";
  }
}
