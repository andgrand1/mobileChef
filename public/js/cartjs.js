const orderTotal = JSON.parse(localStorage.getItem("orderTotal"));
function addfinal() {
  console.log(orderTotal);
  let shownlength = document.querySelector("#orderlength");
  let legnth = orderTotal.length;
  shownlength.append("Number of items: " + legnth);

  let showntotal = document.querySelector("#orderTotal");
  let total = 0;
  for (let i = 0; i < orderTotal.length; i++) {
    total += parseInt(orderTotal[i]);
  }
  showntotal.append("Your Total is: $" + total);
}
addfinal();
