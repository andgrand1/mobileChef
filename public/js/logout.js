const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};
const pullcart = async () => {
  window.location.href = location.href + "cart";
};
document.querySelector("#logout").addEventListener("click", logout);
document.querySelector("#cart").addEventListener("click", pullcart);
