const orderTotal = JSON.parse(localStorage.getItem("orderTotal")) || [];
const pricegetter1 = async () => {
  let price = document.querySelector("#price1").textContent;
  orderTotal.push(price);
  console.log(orderTotal);
  localStorage.setItem("orderTotal", JSON.stringify(orderTotal));
};
const pricegetter2 = async () => {
  let price = document.querySelector("#price2").textContent;
  orderTotal.push(price);
  console.log(orderTotal);
  localStorage.setItem("orderTotal", JSON.stringify(orderTotal));
};
const pricegetter3 = async () => {
  let price = document.querySelector("#price3").textContent;
  orderTotal.push(price);
  console.log(orderTotal);
  localStorage.setItem("orderTotal", JSON.stringify(orderTotal));
};
document.querySelector("#addbutton1").addEventListener("click", pricegetter1);

document.querySelector("#addbutton2").addEventListener("click", pricegetter2);

document.querySelector("#addbutton3").addEventListener("click", pricegetter3);
