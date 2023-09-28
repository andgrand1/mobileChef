// used cleaves js code
const { Cleave } = require("./cleave");
// credit card
new Cleave(".my-input", {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {},
  // update UI ...
});

// phone
var cleavePhone = new Cleave(".input-phone", {
  phone: true,
  phoneRegionCode: "{country}",
});

// date
var cleaveDate = new Cleave(".input-date", {
  date: true,
});
