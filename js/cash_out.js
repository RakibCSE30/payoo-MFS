document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const curentNumber2 =getInputFieldValueById('phone-number2');
    //  document.getElementById("phone-number2").value;
    // currentBalance = parseFloat(curentNumber2);
    const pin2 = getInputFieldValueById('pin-number2');
    // document.getElementById("pin-number2").value;
    console.log(curentNumber2, pin2);
    if (pin2 === 1234) {
      console.log("sucesfuly added");
      const balance = getInputTextValueById('balances')
    //   document.getElementById("balance").innerText;
    //   balanceNumber = parseFloat(balance);
      console.log(balance);
      const newBalance = balance - curentNumber2;
      console.log(newBalance);
      document.getElementById("balances").innerText = newBalance;
    } else {
      console.log("please valid phone or pin number");
    }
  });
